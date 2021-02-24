import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { TaskEntityService } from '../../../tables/tasks/tasks.service';
import { Task } from '../../../../shared/types/graphql';

@Resolver()
@Injectable()
export class UpdateTaskResolver {
  constructor(private readonly taskService: TaskEntityService) {}

  @Mutation()
  async updateTask(
    @Args('id') id: number,
    @Args('name') name?: string,
    @Args('description') description?: string,
    @Args('status') status?: string,
  ): Promise<Task> {
    const updates: Partial<Task> = Object.assign(
      {},
      name && { name },
      description && { description },
      status && { status },
    );

    return await this.taskService.update(id, updates);
  }
}
