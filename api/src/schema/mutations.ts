import { GraphQLObjectType, GraphQLNonNull, GraphQLError } from 'graphql';
import {
    SendMessagePayload,
    SendMessageInput,
    SignupPayload,
    SignupInput,
    SigninPayload,
    SigninInput,
    CreateChannelPayload,
    CreateChannelInput,
} from './types';
import { storeMessage, signUp, signIn, createChannel } from '../services';
import { shouldBeAuthorized, subscribeUserToChannel, pubsub } from './utils';

export const mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        send: {
            type: new GraphQLNonNull(SendMessagePayload),
            args: { input: { type: new GraphQLNonNull(SendMessageInput) } },
            async resolve(_, { input: { body, channelId } }, { user }: any) {
                shouldBeAuthorized(user);
                const message = await storeMessage(body, user.id, channelId);
                pubsub.publish(subscribeUserToChannel(channelId), { post: { message } });
                return { message };
            },
        },
        signup: {
            type: new GraphQLNonNull(SignupPayload),
            args: { input: { type: new GraphQLNonNull(SignupInput) } },
            async resolve(_, { input: { username, password } }) {
                const result = await signUp(username, password);
                if (typeof result === 'string') {
                    throw new GraphQLError(result);
                }

                return result;
            },
        },
        signin: {
            type: new GraphQLNonNull(SigninPayload),
            args: { input: { type: new GraphQLNonNull(SigninInput) } },
            async resolve(_, { input: { username, password } }, __, info) {
                const result = await signIn(username, password);
                if (typeof result === 'string') {
                    throw new GraphQLError(result);
                }

                return result;
            },
        },
        createChannel: {
            type: new GraphQLNonNull(CreateChannelPayload),
            args: { input: { type: new GraphQLNonNull(CreateChannelInput) } },
            async resolve(_, { input: { name } }, req: any) {
                shouldBeAuthorized(req);
                const channel = await createChannel(name, req.user.id);
                return { channel };
            },
        },
    },
});
