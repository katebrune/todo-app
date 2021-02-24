import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class PostgresService {
  constructor(private configService: ConfigService) {}

  get config(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('postgresHost'),
      port: this.configService.get('postgresPort'),
      username: this.configService.get('postgresUser'),
      password: this.configService.get('postgresPassword'),
      database: this.configService.get('postgresDatabase'),
      entities: ['dist/database/entities/*.entity.js'],
      migrationsTableName: 'migration',
      migrations: ['dist/database/migration/*.js'],
      cli: {
        migrationsDir: 'src/database/migration',
      },
    };
  }
}
