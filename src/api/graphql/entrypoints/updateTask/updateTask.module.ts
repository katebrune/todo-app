import { Module } from '@nestjs/common';
import { AuthModule } from '../../../auth/auth.module';
import { TasksModule } from '../../../tables/tasks/tasks.module';
import { UpdateTaskResolver } from './updateTask.resolver';

@Module({
  imports: [TasksModule, AuthModule],
  providers: [UpdateTaskResolver],
})
export class UpdateTaskModule {}
