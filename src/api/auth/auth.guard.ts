import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Scope,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { SessionEntity } from '../../database/entities/session.entity';
import { SessionEntityService } from '../tables/sessions/sessions.service';
import { CurrentSessionService } from './currentSession.service';
import { TokenManagerService } from './tokenManager.service';

@Injectable({ scope: Scope.REQUEST })
export class AuthGuard implements CanActivate {
  constructor(
    private readonly sessionService: SessionEntityService,
    private readonly tokenManagerService: TokenManagerService,
    private readonly currentSessionService: CurrentSessionService,
  ) {}

  private getRequestFromContext(context: ExecutionContext) {
    return GqlExecutionContext.create(context).getContext().req;
  }

  private async getSessionFromToken(
    token: string,
  ): Promise<SessionEntity | null> {
    let session: SessionEntity = null;
    if (token) {
      try {
        const tokenContents = await this.tokenManagerService.verifyToken(token);
        session = await this.sessionService.getSession(
          tokenContents.sessionToken,
        );
      } catch (err) {
        console.log('unable to resume session');
      }
    }
    return session;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = this.getRequestFromContext(context);
      const session = await this.getSessionFromToken(
        request?.headers.authorization.replace('Bearer ', ''),
      );
      if (session) {
        this.currentSessionService.set(session);
        return true;
      }
    } catch (err) {
      throw new AuthenticationError(
        'Valid session required to access this resource',
      );
    }
  }
}
