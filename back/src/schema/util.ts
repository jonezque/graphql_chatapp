import { GraphQLError } from 'graphql';
import { Request } from 'express';
import { User } from '../entity';

export const shouldBeAuthorized = (req: any) => {
    if (!req.user) {
        throw new GraphQLError('not authorized');
    }
}

export interface IRequest extends Request {
    user?: User | null;
}
