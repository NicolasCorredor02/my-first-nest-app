import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

// Los validatePipes se utilizan para validar y transformar los datos de entrada en NestJS. En este caso, el pipe `ValidateTaskPipe` es un ejemplo de un pipe que podría usarse para validar las tareas entrantes, aunque actualmente no realiza ninguna validación específica.

@Injectable()
export class ValidateTaskPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const completedBoolean = value.completed;

    if (typeof completedBoolean !== 'boolean') {
      // Si el valor de completed no es un booleano, se lanza un error.
      throw new HttpException(
        'The completed field must be a boolean',
        HttpStatus.BAD_REQUEST,
      );
    }

    return {  // Devuelve el valor transformado, que en este caso es el objeto `value`.
      ...value,
      completed: completedBoolean,
    };
  }
}
