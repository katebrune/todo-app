import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SessionEntity } from '../../../database/entities/session.entity';

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
}
