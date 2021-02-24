import { Module, Post } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from './configuration';
import { PostgresService } from './postgres.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  exports: [ConfigService, PostgresService],
  providers: [ConfigService, PostgresService],
})
export class ConfigurationModule {}
