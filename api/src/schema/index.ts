import { directives } from './directives';
import { query } from './queries';
import { mutation } from './mutations';
import { subscription } from './subscriptions';
import { GraphQLSchema } from 'graphql';

export const schema = new GraphQLSchema({ query, mutation, subscription, directives })