import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class PostgresService {
  constructor(private configService: ConfigService) {}

  get config(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('database.host'),
      port: this.configService.get('database.port'),
      username: this.configService.get('database.user'),
      password: this.configService.get('database.password'),
      database: this.configService.get('database.name'),
      entities: ['dist/database/entities/*.entity.js'],
      migrationsTableName: 'migrations',
      migrations: ['dist/database/migrations/*.js'],
      cli: {
        migrationsDir: 'src/database/migrations',
      },
    };
  }
}
