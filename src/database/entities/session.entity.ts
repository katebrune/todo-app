import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'sessions' })
export class SessionEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  token: string;
}
