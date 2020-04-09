import { GraphQLError } from 'graphql';
import { Request } from 'express';
import { User } from '../entity';
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

export const shouldBeAuthorized = (user: any) => {
    if (!user) {
        throw new GraphQLError('not authorized');
    }
};

export interface IRequest extends Request {
    user?: User | null;
}

export function subscribeUserToChannel(channelId: string) {
    return `channel__${channelId}`;
}
