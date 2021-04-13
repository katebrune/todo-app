import { Module } from '@nestjs/common';
import { AuthModule } from '../../../auth/auth.module';
import { SessionModule } from '../../../tables/sessions/sessions.module';
import { StartSessionResolver } from './startSession.resolver';

@Module({
  imports: [SessionModule, AuthModule],
  providers: [StartSessionResolver],
})
export class StartSessionModule {}
