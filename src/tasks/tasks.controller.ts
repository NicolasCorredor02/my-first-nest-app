import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service'; // Importa el servicio de tareas que has creado.

@Controller({}) // Este decorador define un controlador de NestJS. Un controlador es responsable de manejar las solicitudes entrantes y devolver respuestas.
export class TasksController {
//   tasksService: TasksService; // Declara una propiedad para el servicio de tareas. Pero no es necesario declararlo aqui cuando se inyecta en el constructor con private

  // Para usar el servicio de tareas, primero debes importarlo y luego inyectarlo en el constructor del controlador.
  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get('/tasks')
  getAllTasks() {
    // Buscar en una base de datos o en un servicio
    // y devolver una lista de tareas.
    // Por ejemplo, podrías devolver un array de objetos de tareas.
    return this.tasksService.getAllTasks();
  }
}
