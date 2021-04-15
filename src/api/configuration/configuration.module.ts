import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostgresService } from './postgres.service';
import { databaseConfig, databaseConfigValidation } from './database.config';
import { appConfig, appConfigValidation } from './app.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, databaseConfig],
      validationSchema: appConfigValidation.concat(databaseConfigValidation),
    }),
  ],
  exports: [ConfigService, PostgresService],
  providers: [ConfigService, PostgresService],
})
export class ConfigurationModule {}
