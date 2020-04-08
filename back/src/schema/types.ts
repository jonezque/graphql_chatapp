import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLInputObjectType, GraphQLNonNull, GraphQLInterfaceType } from 'graphql';
import { getUserById, getUsers } from '../services';

export const NodeInterface = new GraphQLInterfaceType({
    name: 'Node',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    }
});

export const UserType = new GraphQLObjectType({
    name: 'User',
    interfaces: [NodeInterface],
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        username: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

export const MessageType = new GraphQLObjectType({
    name: 'Message',
    interfaces: [NodeInterface],
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        body: { type: new GraphQLNonNull(GraphQLString) },
        created: { type: new GraphQLNonNull(GraphQLString) },
        owner: { type: new GraphQLNonNull(UserType) },
        ownerId: { type: new GraphQLNonNull(GraphQLID) },
        channel: { type: new GraphQLNonNull(ChannelType) },
        channelId: { type: new GraphQLNonNull(GraphQLID) }
    }),
});

export const ChannelType = new GraphQLObjectType({
    name: 'Channel',
    interfaces: [NodeInterface],
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        ownerId: { type: new GraphQLNonNull(GraphQLID) },
        owner: {
            type: new GraphQLNonNull(UserType),
            async resolve(parentValue, args, req) {
                return getUserById(parentValue.ownerId);
            },
        },
        users: {
            type: new GraphQLList(UserType),
            async resolve(parentValue, args, req) {
                return getUsers();
            },
        },
    }),
});

export const ChangeNamePayload = new GraphQLObjectType({
    name: 'ChangeNamePayload',
    fields: () => ({
        user: { type: new GraphQLNonNull(UserType) },
    }),
});

export const CreateChannelPayload = new GraphQLObjectType({
    name: 'CreateChannelPayload',
    fields: () => ({
        channel: { type: new GraphQLNonNull(ChannelType) },
    }),
});

export const SignupPayload = new GraphQLObjectType({
    name: 'SignupPayload',
    fields: () => ({
        token: { type: new GraphQLNonNull(GraphQLString) },
        user: { type: new GraphQLNonNull(UserType) },
    }),
});

export const SigninPayload = new GraphQLObjectType({
    name: 'SigninPayload',
    fields: () => ({
        token: { type: new GraphQLNonNull(GraphQLString) },
        user: { type: new GraphQLNonNull(UserType) },
    }),
});

export const ChangeNameInput = new GraphQLInputObjectType({
    name: 'ChangeNameInput',
    fields: () => ({
        username: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

export const CreateChannelInput = new GraphQLInputObjectType({
    name: 'CreateChannelInput',
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

export const SignupInput = new GraphQLInputObjectType({
    name: 'SignupInput',
    fields: () => ({
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

export const SigninInput = new GraphQLInputObjectType({
    name: 'SigninInput',
    fields: () => ({
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    }),
});

export const SendMessagePayload = new GraphQLObjectType({
    name: 'SendMessagePayload',
    fields: () => ({
        message: { type: new GraphQLNonNull(MessageType) },
    }),
});

export const SendMessageInput = new GraphQLInputObjectType({
    name: 'SendMessageInput',
    fields: () => ({
        body: { type: new GraphQLNonNull(GraphQLString) },
        channelId: { type: new GraphQLNonNull(GraphQLID) },
    }),
});

export const PostPayload = new GraphQLObjectType({
    name: 'PostPayload',
    fields: () => ({
        message: { type: new GraphQLNonNull(MessageType) },
    })
});
export const PostInput = new GraphQLInputObjectType({
    name: 'PostInput',
    fields: () => ({
        channelId: { type: new GraphQLNonNull(GraphQLID) },
    }),
});