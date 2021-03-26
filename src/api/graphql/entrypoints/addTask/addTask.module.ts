import { Module } from '@nestjs/common';
import { AuthModule } from '../../../auth/auth.module';
import { TasksModule } from '../../../tables/tasks/tasks.module';
import { AddTaskResolver } from './addTask.resolver';

@Module({
  imports: [TasksModule, AuthModule],
  providers: [AddTaskResolver],
})
export class AddTaskModule {}
