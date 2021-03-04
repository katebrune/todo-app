import { Module } from '@nestjs/common';
import { SessionModule } from '../../../tables/sessions/sessions.module';
import { StartSessionResolver } from './startSession.resolver';

@Module({
  imports: [SessionModule],
  providers: [StartSessionResolver],
})
export class StartSessionModule {}
