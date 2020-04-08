import { GraphQLObjectType, GraphQLNonNull, GraphQLSchema, GraphQLError } from 'graphql';
import { signUp, signIn } from '../services';
import { SignupPayload, SigninPayload, UserType, SigninInput, SignupInput } from './types';

const mutation = new GraphQLObjectType({
    name: 'AuthMutations',
    fields: {
        signup: {
            type: new GraphQLNonNull(SignupPayload),
            args: { input: { type: new GraphQLNonNull(SignupInput) } },
            async resolve(parentValue, { input: { username, password } }) {
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
            async resolve(parentValue, { input: { username, password } }) {
                const result = await signIn(username, password);
                if (typeof result === 'string') {
                    throw new GraphQLError(result);
                }

                return result;
            },
        },
    },
});

const query = new GraphQLObjectType({
    name: 'AuthQueries',
    fields: {
        me: {
            type: UserType,
            resolve(parentValue, _, req) {
                return req.user;
            },
        },
    },
});

export const authSchema = new GraphQLSchema({ query, mutation });
