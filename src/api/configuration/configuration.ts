import { isNil, isEmpty } from 'lodash';
import { join } from 'path';
import { config } from 'dotenv';

export interface Environment {
  postgresHost: string;
  postgresPort: number;
  postgresUser: string;
  postgresPassword: string;
  postgresDatabase: string;
}

export const Environment = {
  getString(name: string, defaultValue = '') {
    const value = process.env[name];
    if (Environment.isEmpty(value)) return defaultValue;
    return value;
  },
  getNumber(name: string, defaultValue?: number) {
    const value = Environment.getString(name);
    const numericValue = Number(value);
    if (!Environment.isEmpty(value) && !isNaN(numericValue)) {
      return numericValue;
    }
    if (!isNil(defaultValue)) {
      return defaultValue;
    }
    throw new Error(`Could not parse numeric environment variable "${name}"`);
  },
  isEmpty(value: string) {
    return isNil(value) || isEmpty(value);
  },
  setNumber(name: string, value: number) {
    Environment.setString(name, value.toString());
  },
  setString(name: string, value: string) {
    process.env[name] = value;
  },
};

export const configuration = (): Environment => {
  config({
    path: join(__dirname, '/../../../', '.env'),
  });
  return {
    get postgresHost() {
      return Environment.getString('POSTGRES_HOST');
    },
    get postgresPort() {
      return Environment.getNumber('POSTGRES_PORT');
    },
    get postgresUser() {
      return Environment.getString('POSTGRES_USER');
    },
    get postgresPassword() {
      return Environment.getString('POSTGRES_PASSWORD');
    },
    get postgresDatabase() {
      return Environment.getString('POSTGRES_DB');
    },
  };
};
