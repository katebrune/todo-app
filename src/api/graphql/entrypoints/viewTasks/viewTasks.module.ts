import { Module } from '@nestjs/common';
import { AuthModule } from '../../../auth/auth.module';
import { SessionModule } from '../../../tables/sessions/sessions.module';
import { TasksModule } from '../../../tables/tasks/tasks.module';
import { ViewTasksResolver } from './viewTasks.resolver';

@Module({
  imports: [TasksModule, AuthModule, SessionModule],
  providers: [ViewTasksResolver],
})
export class ViewTasksModule {}
