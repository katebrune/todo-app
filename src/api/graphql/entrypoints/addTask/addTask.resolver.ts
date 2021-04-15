import { Args, Resolver, Mutation } from '@nestjs/graphql';
import { Injectable, Scope, UseGuards } from '@nestjs/common';
import { TaskEntityService } from '../../../tables/tasks/tasks.service';
import { Task } from '../../../types/graphql';
import { AuthGuard } from '../../../auth/auth.guard';
import { CurrentSessionService } from '../../../auth/currentSession.service';

@Resolver()
@Injectable({ scope: Scope.REQUEST })
@UseGuards(AuthGuard)
export class AddTaskResolver {
  constructor(
    private readonly taskService: TaskEntityService,
    private readonly currentSessionService: CurrentSessionService,
  ) {}

  @Mutation()
  async addTask(
    @Args('name') name: string,
    @Args('description') description: string,
  ): Promise<Task> {
    const session = this.currentSessionService.get();
    return await this.taskService.add(name, description, session);
  }
}
