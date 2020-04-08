import React from "react";
import { User, Channel } from "../types";
import { QueryRenderer } from "react-relay";
import environment from "../environment";
import { fetchMyChannels } from "../queries";
import { myChannelsQuery } from "../queries/__generated__/myChannelsQuery.graphql";
import { Route, Switch } from "react-router";
import { Profile, CreateChannel } from ".";
import { Channel as ChannelComponent } from "./Channel"; 
import { Link } from "react-router-dom";

const Render: React.FC<{ user: User; channels: Channel[] }> = ({
  user,
  channels = [],
}) => (
  <Switch>
    <Route exact path="/chat">
      <div className="center">
        {channels.map((c) => (
          <Link key={c.id} to={`/chat/${c.id}`}>{c.name}</Link>
        ))}
      </div>
    </Route>
    <Route path="/chat/profile">
      <Profile />
    </Route>
    <Route path="/chat/create-channel">
      <CreateChannel />
    </Route>
    <Route path="/chat/:channelId">
      <ChannelComponent />
    </Route>
  </Switch>
);

const Main: React.FC<{ user: User }> = (qProps) => (
  <QueryRenderer<myChannelsQuery>
    environment={environment}
    query={fetchMyChannels}
    variables={{}}
    render={({ error, props }) => (
      <Render {...qProps} channels={(props?.myChannels as Channel[]) || []} />
    )}
  />
);

export { Main };
