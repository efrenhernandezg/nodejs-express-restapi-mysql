import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;

export const DB_HOST = process.env.HOST || '127.0.0.1';
export const DB_USER = process.env.USER || 'root';
export const DB_PASSWORD = process.env.PASSWORD || 'Eh15865685$';
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb';
export const DB_PORT = process.env.DB_PORT || 3306;
