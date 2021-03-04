import { Resolver, Mutation } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { SessionEntityService } from '../../../tables/sessions/sessions.service';

@Resolver()
@Injectable()
export class StartSessionResolver {
  constructor(private readonly sessionService: SessionEntityService) {}

  @Mutation()
  async startSession(): Promise<string> {
    return (await this.sessionService.add(uuidv4())).token;
  }
}
