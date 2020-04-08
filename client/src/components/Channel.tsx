import React, { useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { sendMessage } from "../mutations/SendMessage";
import { QueryRenderer } from "react-relay";
import { GetChannelMessagesQuery } from "../queries/__generated__/GetChannelMessagesQuery.graphql";
import environment from "../environment";
import { getChannelMessages } from "../queries/GetChannelMessages";
import { Message, User } from "../types";
import { getAuth } from "./";
import { subscribeToChannel } from "../subscriptions/Post";
import { userInfo } from "os";

const Render: React.FC<{ channelId: string; messages: Message[]; user: User }> = ({
  channelId,
  messages,
  user,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const send = useCallback(() => {
    const value = inputRef.current!.value;
    if (value) {
      inputRef.current!.value = "";
      sendMessage(value, channelId);
    }
  }, [channelId]);

  const cb = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === "Enter") {
        send();
      }
    },
    [send]
  );

  useEffect(() => {
    messageRef.current?.scrollTo(0, messageRef.current?.scrollHeight);
  }, [messages]);

  useEffect(() => {
    window.addEventListener("keydown", cb);
    inputRef.current?.focus();

    subscribeToChannel(channelId);

    return () => {
      window.removeEventListener("keydown", cb);
    };
  }, [cb, channelId]);

  return (
    <div className="str chat">
      <div ref={messageRef} className="messages">
        {messages.map((x) => (
          <div key={x.id} className={x.ownerId === user.id ? '' : 'pink'}>{`[${new Date(+x.created).toLocaleTimeString()}]: ${
            x.body
          }`}</div>
        ))}
      </div>
      <div className="chat--control">
        <input ref={inputRef} className="chat--input" />
        <button className="chat--send" onClick={send}>
          send
        </button>
      </div>
    </div>
  );
};

export const Channel = () => {
  const { channelId } = useParams() as { channelId: string };
  const user = getAuth();

  return (
    <QueryRenderer<GetChannelMessagesQuery>
      environment={environment}
      query={getChannelMessages}
      variables={{ channelId }}
      render={({ error, props }) => {
        if (!props || !user) {
          return <div>Loading...</div>;
        }

        return <Render channelId={channelId} messages={props.channelMessages as Message[]} user={user} />;
      }}
    />
  );
};
