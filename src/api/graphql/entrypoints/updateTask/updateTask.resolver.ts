import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Injectable, UseGuards, Scope } from '@nestjs/common';
import { TaskEntityService } from '../../../tables/tasks/tasks.service';
import { Task } from '../../../types/graphql';
import { AuthGuard } from '../../../auth/auth.guard';

@Resolver()
@Injectable({ scope: Scope.REQUEST })
@UseGuards(AuthGuard)
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
