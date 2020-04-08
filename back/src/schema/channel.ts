import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLNonNull } from 'graphql';
import {

    getMyChannels,
    createChannel,
} from '../services';
import { ChannelType, CreateChannelPayload, CreateChannelInput } from './types';
import { shouldBeAuthorized } from './util';

const mutation = new GraphQLObjectType({
    name: 'ChannelMutations',
    fields: {
        createChannel: {
            type: new GraphQLNonNull(CreateChannelPayload),
            args: { input: { type: new GraphQLNonNull(CreateChannelInput) } },
            async resolve(parentValue, { input: { name } }, req: any) {
                shouldBeAuthorized(req);
                const channel = await createChannel(name, req.user.id);
                return { channel };
            },
        },
    },
});

const query = new GraphQLObjectType({
    name: 'ChannelQueries',
    fields: {
        myChannels: {
            type: new GraphQLList(ChannelType),
            async resolve(parentValue, args, req: any) {
                shouldBeAuthorized(req);
                return getMyChannels(req.user.id);
            },
        },
    },
});

export const channelSchema = new GraphQLSchema({ query, mutation });
