import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { TaskEntity } from './task.entity';

@Entity({ name: 'sessions' })
export class SessionEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  token: string;

  @OneToMany(() => TaskEntity, (task) => task.session)
  tasks: TaskEntity[];
}
