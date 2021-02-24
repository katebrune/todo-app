import { Module } from '@nestjs/common';
import { TasksModule } from '../../../tables/tasks/tasks.module';
import { AddTaskResolver } from './addTask.resolver';

@Module({
  imports: [TasksModule],
  providers: [AddTaskResolver],
})
export class AddTaskModule {}
