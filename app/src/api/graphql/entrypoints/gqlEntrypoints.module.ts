import { Module } from '@nestjs/common';
import { ViewTasksModule } from './viewTasks/viewTasks.module';
import { AddTaskModule } from './addTask/addTask.module';
import { UpdateTaskModule } from './updateTask/updateTask.module';

@Module({
  imports: [ViewTasksModule, AddTaskModule, UpdateTaskModule],
  providers: [],
})
export class GqlEntrypointsModule {}
