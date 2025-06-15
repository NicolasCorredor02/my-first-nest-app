import {
  IsOptional,
  IsString,
  IsBoolean,
  IsInt,
  IsNotEmpty,
} from 'class-validator';
export class UpdateTaskDto {
  @IsInt()
  @IsNotEmpty()
  id: number; // Este campo es obligatorio para identificar la tarea que se va a actualizar.
  @IsOptional() // Este decorador indica que este campo es opcional.
  @IsString() // Este decorador valida que el campo sea una cadena de texto.
  title?: string; // El signo de interrogación indica que este campo es opcional.
  @IsOptional()
  @IsString()
  description?: string; // Este campo también es opcional.
  @IsOptional()
  @IsBoolean() // Este decorador valida que el campo sea un booleano.
  completed?: boolean; // Este campo es opcional y puede ser un booleano.
}
