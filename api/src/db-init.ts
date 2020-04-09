import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import config from './ormconfig.json';
import { createConnection } from 'typeorm';

const mysql:MysqlConnectionOptions = {...config, type: 'mysql' };

export const connection = createConnection(mysql);