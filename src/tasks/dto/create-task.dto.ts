// Los DTOs (Data Transfer Objects) son objetos que se utilizan para transferir datos entre diferentes partes de la aplicación, como entre el cliente y el servidor. En este caso, el DTO `CreateTaskDto` define la estructura de los datos necesarios para crear una nueva tarea.
// Por lo general, los DTOs se utilizan para validar y estructurar los datos que se envían a través de las solicitudes HTTP, asegurando que cumplan con un formato específico antes de ser procesados por el servidor.

// Esta es la version de un DTO que usa interfaces en lugar de clases. Aca no se implementa class-validator ni class-transformer, por lo que no se pueden validar los datos de entrada ni transformarlos automáticamente. Sin embargo, es una forma más simple de definir la estructura de los datos que se espera recibir al crear una tarea.
// export interface CreateTaskDto {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// Aca se implementa class-validator y class-transformer para validar y transformar los datos de entrada.
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;
}
