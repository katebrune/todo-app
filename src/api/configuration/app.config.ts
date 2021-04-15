import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const appConfig = registerAs('app', () => ({
  env: process.env.NODE_ENV,
  port: process.env.PORT,
}));

export const appConfigValidation = Joi.object({
  NODE_ENV: Joi.string(),
  PORT: Joi.number().default(3000),
});
