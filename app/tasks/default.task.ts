import { desc, task } from 'jake';

desc('default');
task('default', () => {
  console.log('run jake -T to see full task options');
});
