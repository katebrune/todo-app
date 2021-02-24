import { Args, Query, Resolver } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { Task } from '../../../../shared/types/graphql';
import { TaskEntityService } from '../../../tables/tasks/tasks.service';

@Resolver()
@Injectable()
export class ViewTasksResolver {
  constructor(private readonly tasksService: TaskEntityService) {}

  @Query()
  async viewTasks(@Args('status') status?: string): Promise<Task[]> {
    return await this.tasksService.getAll(status);
  }
}
