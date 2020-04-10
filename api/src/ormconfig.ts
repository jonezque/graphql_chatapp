import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: true,
    logging: true,
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
};