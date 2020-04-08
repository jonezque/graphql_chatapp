import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLID, GraphQLError } from 'graphql';
import {
    getUserById,
    getUsers,
    changeName,
} from '../services';
import { UserType, ChangeNamePayload, ChangeNameInput } from './types';
import { shouldBeAuthorized } from './util';

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
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return getUsers();
            },
        },
        user: {
            type: UserType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(parentValue, { id }) {
                return getUserById(id);
            },
        },
    },
});

export const userSchema = new GraphQLSchema({ query, mutation });
