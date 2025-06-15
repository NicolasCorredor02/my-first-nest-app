import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './dto/task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';


@Injectable() // Este decorador significa que esta clase es un servicio que puede ser inyectado en otros componentes de NestJS.
// Los servicios son clases que encapsulan la lógica de negocio y pueden ser reutilizadas en diferentes partes de la aplicación.
export class TasksService {

  private tasks: Task[] = []; // Aquí se inicializa un array vacío de tareas. Este array se puede usar para almacenar las tareas en memoria.

  getAllTasks(query: Object | undefined):Task[]  {
    const { limit } = query as { limit?: string }; // Extrae el parámetro 'limit' del objeto 'query'. Si no se proporciona, será undefined.
    if (limit) {
      // Si se proporciona un query que sea igual a limit, filtra las tareas de acuerdo a un criterio específico.
      return this.tasks.slice(0, parseInt(limit));
    }
    
    return this.tasks;
  }

  getTaskById(id: number): Task | NotFoundException {
    const taksFound = this.tasks.find(task => task.id === id); // Busca una tarea por su ID en el array de tareas.

    if (!taksFound) {
      return new NotFoundException(`Task with ID ${id} not found`);
    }

    return taksFound as Task; // Si se encuentra la tarea, la devuelve. Si no, lanza una excepción de tipo NotFoundException.
  }

  createTask(task: CreateTaskDto):Task {
    // Aquí podrías agregar la lógica para crear una tarea, como guardarla en una base de datos.
    const newTask = {
      ...task,
      id: this.tasks.length + 1 // Asigna un ID único a la tarea basándose en la longitud del array de tareas.
    };
    this.tasks.push(newTask); // Agrega la tarea al array de tareas.
    return newTask; // Devuelve la tarea creada.
  }

  updateTask(updatedTask: UpdateTaskDto, id: number): Task | NotFoundException {
    const tasksExists = this.tasks.find(task => task.id === id); // Busca si la tarea existe en el array de tareas.

    if (!tasksExists) {
      return new NotFoundException(`Task with ID ${id} not found`);
    }
  
    // Si la tarea existe, actualiza sus propiedades con los valores del objeto 'updatedTask'.
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
    return this.tasks[taskIndex];
  }

  deleteTask() {
    return 'Deleting task...';
  }

  partialUpdateTask() {
    return 'Partially updating task...';
  }
}
