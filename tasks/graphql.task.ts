import { namespace, desc, task } from 'jake';
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { execSync } from 'child_process';

function definitionsFactory(watch: boolean) {
  const graphQLDefinnitionsFactory = new GraphQLDefinitionsFactory();

  graphQLDefinnitionsFactory.generate({
    typePaths: ['./src/**/**/**/**/*.graphql'],
    path: './src/api/types/graphql.ts',
    outputAs: 'interface',
    watch: watch,
    emitTypenameField: true,
  });
}

const execute = (command: string) => execSync(command, { stdio: 'inherit' });

namespace('graphql', () => {
  desc('generate types');
  task('generate-types', () => {
    definitionsFactory(false);
  });
  namespace('generate-types', () => {
    task('watch', () => {
      definitionsFactory(true);
    });

    desc('fragments');
    task('fragments', () => {
      execute('yarn graphql-codegen');
    });
  });
});
