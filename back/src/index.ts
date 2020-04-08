import { subscribe, execute } from 'graphql';
import express from 'express';
import expressGraphQL from 'express-graphql';
import { PORT, WS_PORT } from './config';
import cors from 'cors';
import { schema } from './schema';
import { connection } from './db-init';
import morgan from 'morgan';
import helmet from 'helmet';
import { authorizeMiddleware } from './authorize-middleware';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { createServer } from 'http';
import { checkAuth } from './services';

const app = express();
connection.then(() => {
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(authorizeMiddleware);

    app.use(
        '/graphql',
        expressGraphQL({
            graphiql: true,
            schema,
        }),
    );

    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
    });

    const ws = createServer(() => {});

    ws.listen(WS_PORT, () => {
        console.log(`WS Listening on ${WS_PORT}`);
    });

    SubscriptionServer.create(
        {
            schema,
            execute, 
            subscribe,
            onConnect: async ({ token }: { token: string | undefined }) => {
                if (token) {
                    const user = await checkAuth(token);
                    if (user) {
                        return {
                            user
                        };
                    }
               }

               throw new Error('not authenticated');
            }
        },
        {
            server: ws,
            path: '/graphql',
        },
    );
});
