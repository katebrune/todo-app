import { Resolver, ResolveField } from '@nestjs/graphql';
import { Task } from '../../../../shared/types/graphql';

@Resolver('Task')
export class TaskResolver {
  constructor() {}

  @ResolveField()
  id(obj: Task) {
    return obj.id;
  }

  @ResolveField()
  name(obj: Task) {
    return obj.name;
  }

  @ResolveField()
  description(obj: Task) {
    return obj.description;
  }

  @ResolveField()
  status(obj: Task) {
    return obj.status;
  }
}
