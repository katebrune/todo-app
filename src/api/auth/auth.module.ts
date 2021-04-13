import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SessionModule } from '../tables/sessions/sessions.module';
import { AuthGuard } from './auth.guard';
import { CurrentSessionService } from './currentSession.service';
import { TokenManagerService } from './tokenManager.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'my-secret',
    }),
    SessionModule,
  ],
  providers: [AuthGuard, TokenManagerService, CurrentSessionService],
  exports: [
    AuthGuard,
    TokenManagerService,
    SessionModule,
    CurrentSessionService,
  ],
})
export class AuthModule {}
