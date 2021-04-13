import { Resolver, Mutation } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { SessionEntityService } from '../../../tables/sessions/sessions.service';
import { TokenManagerService } from '../../../auth/tokenManager.service';

@Resolver()
@Injectable()
export class StartSessionResolver {
  constructor(
    private readonly sessionService: SessionEntityService,
    private readonly tokenManagerService: TokenManagerService,
  ) {}

  @Mutation()
  async startSession(): Promise<string> {
    const session = await this.sessionService.add(uuidv4());
    return await this.tokenManagerService.createToken(session);
  }
}
