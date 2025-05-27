import { Injectable } from '@nestjs/common';

@Injectable() // Este decorador significa que esta clase es un servicio que puede ser inyectado en otros componentes de NestJS.
// Los servicios son clases que encapsulan la lógica de negocio y pueden ser reutilizadas en diferentes partes de la aplicación.
export class TasksService {
  getAllTasks() {
    return ['task 1', 'task 2', 'task 3'];
  }

}
