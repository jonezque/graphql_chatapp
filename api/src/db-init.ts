import { config } from './ormconfig';
import { createConnection } from 'typeorm';

export const connection = createConnection(config);