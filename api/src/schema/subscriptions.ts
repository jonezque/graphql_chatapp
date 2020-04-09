import { GraphQLObjectType, GraphQLNonNull } from 'graphql';
import { PostPayload, PostInput } from './types';
import { pubsub, subscribeUserToChannel } from './utils';

export const subscription = new GraphQLObjectType({
    name: 'MessageSubscription',
    fields: {
        post: {
            type: new GraphQLNonNull(PostPayload),
            args: { input: { type: new GraphQLNonNull(PostInput) } },
            subscribe(_, { input: { channelId } }) {
                return pubsub.asyncIterator(subscribeUserToChannel(channelId));
            },
        },
    },
});
