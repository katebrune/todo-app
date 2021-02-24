import { Args, Resolver, Mutation } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { TaskEntityService } from '../../../tables/tasks/tasks.service';
import { Task } from '../../../../shared/types/graphql';

@Resolver()
@Injectable()
export class AddTaskResolver {
  constructor(private readonly taskService: TaskEntityService) {}

  @Mutation()
  async addTask(
    @Args('name') name: string,
    @Args('description') description: string,
  ): Promise<Task> {
    return await this.taskService.add(name, description);
  }
}
