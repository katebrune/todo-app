import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const databaseConfig = registerAs('database', () => ({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  name: process.env.POSTGRES_DB,
  hostAuthMethod: process.env.POSTGRES_HOST_AUTH_METHOD,
}));

export const databaseConfigValidation = Joi.object({
  POSTGRES_HOST: Joi.string(),
  POSTGRES_PORT: Joi.number(),
  POSTGRES_USER: Joi.string(),
  POSTGRES_PASSWORD: Joi.string(),
  POSTGRES_DB: Joi.string(),
  POSTGRES_HOST_AUTH_METHOD: Joi.string(),
});
