import { Injectable, Scope } from '@nestjs/common';
import { SessionEntity } from '../../database/entities/session.entity';

@Injectable({ scope: Scope.REQUEST })
export class CurrentSessionService {
  private currentSession: SessionEntity;

  get(): SessionEntity {
    return this.currentSession;
  }

  set(session: SessionEntity) {
    this.currentSession = session;
  }
}
