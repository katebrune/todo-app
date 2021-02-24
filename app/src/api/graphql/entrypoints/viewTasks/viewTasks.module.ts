import { Module } from '@nestjs/common';
import { TasksModule } from '../../../tables/tasks/tasks.module';
import { ViewTasksResolver } from './viewTasks.resolver';

@Module({
  imports: [TasksModule],
  providers: [ViewTasksResolver],
})
export class ViewTasksModule {}
