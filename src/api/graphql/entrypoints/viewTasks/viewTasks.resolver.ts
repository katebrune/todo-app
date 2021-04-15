import { Args, Query, Resolver } from '@nestjs/graphql';
import { Injectable, UseGuards, Scope } from '@nestjs/common';
import { Task } from '../../../types/graphql';
import { TaskEntityService } from '../../../tables/tasks/tasks.service';
import { AuthGuard } from '../../../auth/auth.guard';
import { CurrentSessionService } from '../../../auth/currentSession.service';
import { SessionEntityService } from '../../../tables/sessions/sessions.service';

@Resolver()
@Injectable({ scope: Scope.REQUEST })
@UseGuards(AuthGuard)
export class ViewTasksResolver {
  constructor(
    private readonly tasksService: TaskEntityService,
    private readonly currentSessionService: CurrentSessionService,
    private readonly sessionService: SessionEntityService,
  ) {}

  @Query()
  async viewTasks(@Args('status') status?: string): Promise<Task[]> {
    console.log(this.currentSessionService.get().id);
    return await this.sessionService.getTasks(
      this.currentSessionService.get().id,
    );
  }
}
