import { Module } from '@nestjs/common';
import { TaskResolver } from './task/task.resolver';

@Module({
  imports: [],
  providers: [TaskResolver],
})
export class GqlTypesModule {}
