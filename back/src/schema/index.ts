import { authSchema } from './auth';
import { mergeSchemas } from 'graphql-tools';
import { userSchema } from './user';
import { channelSchema } from './channel';
import { messageSchema } from './message';

export const schema = mergeSchemas({
  schemas: [
    authSchema,
    userSchema,
    channelSchema,
    messageSchema,
  ],
});