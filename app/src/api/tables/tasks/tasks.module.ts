import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from '../../../database/entities/task.entity';
import { TaskEntityService } from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [TaskEntityService],
  exports: [TaskEntityService],
})
export class TasksModule {}
