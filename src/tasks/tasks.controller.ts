import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Put, Query, Req, Res } from '@nestjs/common';
import { TasksService } from './tasks.service'; // Importa el servicio de tareas que has creado.
import { Request, Response } from 'express'; // Importa Request y Response de Express para manejar las solicitudes y respuestas HTTP, en caso de que sea necesario usar la sintaxis de Express.
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ValidateTaskPipe } from './pipes/validate-task/validate-task.pipe';

@Controller('/tasks') // Este decorador define un controlador de NestJS. Un controlador es responsable de manejar las solicitudes entrantes y devolver respuestas.
export class TasksController {
//   tasksService: TasksService; // Declara una propiedad para el servicio de tareas. Pero no es necesario declararlo aqui cuando se inyecta en el constructor con private

  // Para usar el servicio de tareas, primero debes importarlo y luego inyectarlo en el constructor del controlador.
  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  // @Get('')
  // getAllTasks(@Req() req: Request, @Res() res: Response) {
  //   // Buscar en una base de datos o en un servicio
  //   // y devolver una lista de tareas.
  //   // Por ejemplo, podrías devolver un array de objetos de tareas.
  //   // return this.tasksService.getAllTasks();
  //   const tasks = this.tasksService.getAllTasks();
  //   res.status(200).json(tasks); // Devuelve las tareas en formato JSON con un código de estado 200.
  //   // Para usar la sintaxis de Express, se necesita importar Request y Response de 'express'.
  // }

  // Ruta para not found
  @Get('/not-found')
  @HttpCode(404) // Este decorador establece el código de estado HTTP que se devolverá cuando se acceda a esta ruta.
  notFoundPage() {
    return 'Not Found Page'; // Devuelve un mensaje de error o una respuesta personalizada.
  }


  // Contoller con parametros por medio de Query
  @Get('')
  getAllTasks(@Query() query) {
    return this.tasksService.getAllTasks(query);
  }

  @Get('/:id') // Este decorador define una ruta para manejar solicitudes GET a '/tasks/:id', donde ':id' es un parámetro de ruta.
  // @UsePipes(new ValidationPipe()) // Este decorador se usa para aplicar pipes a las solicitudes entrantes. Los Pipes se utilizan para transformar o validar los datos de entrada.

  // ParseIntPipe es un pipe de NestJS que convierte el parámetro de ruta 'id' a un número entero. Si la conversión falla, lanzará una excepción.
  // El uso de ParseIntPipe asegura que el parámetro 'id' sea un número entero antes de pasarlo al método.
  getTaskById(@Param('id', ParseIntPipe) id: number) {

    return this.tasksService.getTaskById(id);
  }

  @Post()
  // @UsePipes(new ValidationPipe()) // Aplica la validación a los datos entrantes usando el DTO CreateTaskDto.
  // Con el uso de ValidateTaskPipe, se aplica la validación personalizada definida en el pipe.
  createTask(@Body(ValidateTaskPipe) task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Put('/:id')
  // @UsePipes(new ValidationPipe()) // Aplica la validación a los datos entrantes usando el DTO UpdateTaskDto.
  updateTask(@Body() updateTask: UpdateTaskDto, @Param('id') id: string) {
    return this.tasksService.updateTask(updateTask, parseInt(id));
  }

  @Delete()
  deleteTask(){
    return this.tasksService.deleteTask();
  }

  @Patch()
  partialUpdateTask() {
    return this.tasksService.partialUpdateTask();
  }
}
