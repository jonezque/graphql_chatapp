import { GraphQLObjectType, GraphQLNonNull, GraphQLSchema, GraphQLList, GraphQLID } from 'graphql';
import { SendMessagePayload, SendMessageInput, MessageType, PostPayload, PostInput } from './types';
import { storeMessage, allMessages, fetchMessagesByChannelId, getUserIdsByChannelId, joinChannel } from '../services';
import { pubsub } from './subscriptions';
import { User } from '../entity';

const mutation = new GraphQLObjectType({
    name: 'MessageMutations',
    fields: {
        send: {
            type: new GraphQLNonNull(SendMessagePayload),
            args: { input: { type: new GraphQLNonNull(SendMessageInput) } },
            async resolve(parentValue, { input: { body, channelId } }, { user: { id } }: any) {
                const message = await storeMessage(body, id, channelId);
                pubsub.publish(subscribeUserToChannel(channelId), { post: { message } });
                return { message };
            }
        }
    },
});

const query = new GraphQLObjectType({
    name: 'MessageQueries',
    fields: {
        messages: {
            type: new GraphQLNonNull(new GraphQLList(MessageType)),
            resolve(parentValue, _, req) {
                return allMessages();
            },
        },
        channelMessages: {
            type: new GraphQLNonNull(new GraphQLList(MessageType)),
            args: { channelId: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { channelId }, req) {
                return fetchMessagesByChannelId(channelId);
            },
        }
    },
});

const subscription = new GraphQLObjectType({
    name: 'MessageSubscription',
    fields: {
        post: {
            type: new GraphQLNonNull(PostPayload),
            args: { input: { type: new GraphQLNonNull(PostInput) } },
            subscribe(parentValue, { input: { channelId } }, { user: { id } }) {
                return pubsub.asyncIterator(subscribeUserToChannel(channelId));
            },
        }
    },
});

function subscribeUserToChannel(channelId: string) {
    return `channel__${channelId}`;
}

export const messageSchema = new GraphQLSchema({ query, mutation, subscription });
