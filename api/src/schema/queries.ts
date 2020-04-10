import { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } from 'graphql';
import { getMyChannels, allMessages, fetchMessagesByChannelId, getUsers, getUserById } from '../services';
import { ChannelType, UserType, MessageType } from './types';
import { shouldBeAuthorized } from './utils';

export const query = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        myChannels: {
            type: new GraphQLList(ChannelType),
            async resolve(_, __, req: any) {
                shouldBeAuthorized(req);
                return getMyChannels(req.user.id);
            },
        },
        me: {
            type: UserType,
            resolve(_, __, req) {
                return req.user;
            },
        },
        messages: {
            type: new GraphQLNonNull(new GraphQLList(MessageType)),
            resolve:() => {
                return allMessages();
            },
        },
        channelMessages: {
            type: new GraphQLNonNull(new GraphQLList(MessageType)),
            args: { channelId: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(_, { channelId }) {
                return fetchMessagesByChannelId(channelId);
            },
        },

        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return getUsers();
            },
        },
        user: {
            type: UserType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(_, { id }) {
                return getUserById(id);
            },
        },
    },
});

function Log() {
    console.log(1);
}