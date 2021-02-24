import { Module } from '@nestjs/common';
import { TasksModule } from '../../../tables/tasks/tasks.module';
import { UpdateTaskResolver } from './updateTask.resolver';

@Module({
  imports: [TasksModule],
  providers: [UpdateTaskResolver],
})
export class UpdateTaskModule {}
