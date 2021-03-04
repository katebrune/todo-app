import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionEntity } from '../../../database/entities/session.entity';
import { SessionEntityService } from './sessions.service';

@Module({
  imports: [TypeOrmModule.forFeature([SessionEntity])],
  providers: [SessionEntityService],
  exports: [SessionEntityService],
})
export class SessionModule {}
