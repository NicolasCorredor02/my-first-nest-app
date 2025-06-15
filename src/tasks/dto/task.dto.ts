import { CreateTaskDto } from './create-task.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class Task extends CreateTaskDto {
  @IsInt()
  @IsNotEmpty()
  id: number;
}
