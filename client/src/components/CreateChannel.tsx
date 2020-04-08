import React, { useRef } from "react";
import { useHistory } from "react-router";
import { createChannel } from "../mutations/CreateChannel";

export const CreateChannel = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  return (
    <form className="centersign" >
      <input ref={nameRef} placeholder="channel name"></input>
      <button
        onClick={(evt) => {
          evt.preventDefault();
          if (nameRef.current?.value) {
            createChannel(nameRef.current?.value, () => history.push('/chat'));
          }
        }}
      >
        create
      </button>
    </form>
  );
};
