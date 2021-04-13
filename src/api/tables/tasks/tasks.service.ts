import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SessionEntity } from '../../../database/entities/session.entity';
import { TaskEntity } from '../../../database/entities/task.entity';

@Injectable()
export class TaskEntityService {
  constructor(
    @InjectRepository(TaskEntity) private readonly repo: Repository<TaskEntity>,
  ) {}

  public async getAll(status?: string): Promise<TaskEntity[]> {
    if (status) {
      return this.repo.find({
        where: { status: status },
        order: { id: 'ASC' },
      });
    }
    return await this.repo.find();
  }

  public async add(
    name: string,
    description: string,
    session: SessionEntity,
  ): Promise<TaskEntity> {
    return this.repo.save({
      name: name,
      description: description,
      status: 'TODO',
      session: session,
    });
  }

  public async update(
    id: number,
    updates: Partial<TaskEntity>,
  ): Promise<TaskEntity> {
    const entity = await this.repo.findOne(id);
    const updatedEntity = { ...entity, ...updates };
    await this.repo.update(id, updatedEntity);
    return await this.repo.findOne(id);
  }
}
