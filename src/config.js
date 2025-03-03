import {config} from 'dotenv';

config();

//export const PORT = process.env.PORT || 3000;
//export const DB_HOST = process.env.DB_HOST || 'localhost';
//export const DB_PORT = process.env.DB_PORT || 3306;
//export const DB_USER = process.env.DB_USER || 'root';
//export const DB_PASSWORD = process.env.DB_PASSWORD || 'mysql2051';
//export const DB_DATABASE = process.env.DB_DATABASE || 'companydb';

export const PORT = process.env.PORT;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE = process.env.DB_DATABASE;