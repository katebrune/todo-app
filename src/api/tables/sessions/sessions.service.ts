import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SessionEntity } from '../../../database/entities/session.entity';
import { TaskEntity } from '../../../database/entities/task.entity';

@Injectable()
export class SessionEntityService {
  constructor(
    @InjectRepository(SessionEntity)
    private readonly repo: Repository<SessionEntity>,
  ) {}

  public async add(token: string): Promise<SessionEntity> {
    return this.repo.save({
      token: token,
    });
  }

  public async getSession(token: string): Promise<SessionEntity> {
    return this.repo.findOne({
      where: { token: token },
    });
  }

  public async getTasks(id: number): Promise<TaskEntity[]> {
    return this.repo
      .findOne({
        where: { id: id },
        relations: ['tasks'],
      })
      .then((session: SessionEntity) => session.tasks);
  }
}
