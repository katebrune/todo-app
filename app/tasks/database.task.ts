import { desc, task, namespace } from 'jake';
import { Test, TestingModule } from '@nestjs/testing';
import { writeFileSync } from 'fs';
import { ConfigurationModule } from '../src/api/configuration/configuration.module';
import { execSync } from 'child_process';
import { PostgresService } from '../src/api/configuration/postgres.service';

const getPostgresService = async (): Promise<PostgresService> => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [ConfigurationModule],
  }).compile();

  return module.get<PostgresService>(PostgresService);
};

const execute = (command: string) => execSync(command, { stdio: 'inherit' });

namespace('db', () => {
  desc('reset');
  task('reset', () => {
    execSync('yarn typeorm schema:drop');
  });

  namespace('config', () => {
    desc('generate');
    task('generate', async () => {
      const db = await getPostgresService();
      writeFileSync('ormconfig.json', JSON.stringify(db.config, null, 2));
    });
  });

  namespace('migration', () => {
    desc('generate');
    task('generate', (name: string) => {
      execute(`yarn typeorm migration:generate -n ${name}`);
      execute(`yarn build`);
    });

    desc('run');
    task('run', () => {
      execute(`yarn typeorm migration:run`);
    });
  });
});
