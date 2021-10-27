import { IsEnum, IsOptional, IsString } from 'class-validator';

import { TaskStatus } from '../task.status.enum';
import { TasksModule } from '../tasks.module';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TasksModule;

  @IsOptional()
  @IsString()
  search?: string;
}
