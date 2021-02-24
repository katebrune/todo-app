import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ViewModule } from './view/view.module';
import { GqlEntrypointsModule } from './graphql/entrypoints/gqlEntrypoints.module';
import { GqlTypesModule } from './graphql/types/gqlTypes.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { PostgresService } from './configuration/postgres.service';

@Module({
  imports: [
    ConfigurationModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [PostgresService],
      useFactory: (postgres: PostgresService) => postgres.config,
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/**/**/**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/shared/types/graphql.ts'),
      },
      introspection: true,
      playground: true,
    }),
    GqlEntrypointsModule,
    GqlTypesModule,
    ViewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
