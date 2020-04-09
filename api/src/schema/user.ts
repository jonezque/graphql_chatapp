import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLID, GraphQLError } from 'graphql';
import {
    getUserById,
    getUsers,
    changeName,
} from '../services';
import { UserType, ChangeNamePayload, ChangeNameInput } from './types';
import { shouldBeAuthorized } from './utils';

const mutation = new GraphQLObjectType({
    name: 'UserMutations',
    fields: {
        changeName: {
            type: new GraphQLNonNull(ChangeNamePayload),
            args: { input: { type: new GraphQLNonNull(ChangeNameInput) } },
            async resolve(parentValue, { input: { username } }, req: any) {
                shouldBeAuthorized(req);
                const user = await changeName(username, req.user.id);
                if (typeof user === 'string') {
                    throw new GraphQLError(user);
                }
                
                return { user };
            },
        },
    },
});

const query = new GraphQLObjectType({
    name: 'UserQueries',
    fields: {
    },
});

export const userSchema = new GraphQLSchema({ query, mutation });
