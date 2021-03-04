import { Module } from '@nestjs/common';
import { ViewTasksModule } from './viewTasks/viewTasks.module';
import { AddTaskModule } from './addTask/addTask.module';
import { UpdateTaskModule } from './updateTask/updateTask.module';
import { StartSessionModule } from './startSession/startSession.module';

@Module({
  imports: [
    ViewTasksModule,
    AddTaskModule,
    UpdateTaskModule,
    StartSessionModule,
  ],
  providers: [],
})
export class GqlEntrypointsModule {}
