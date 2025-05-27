import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
@Module({
    controllers: [TasksController], // Aquí se definen los controladores que manejarán las solicitudes HTTP relacionadas con las tareas.
    providers: [TasksService], // Aquí puedes agregar servicios que serán utilizados por este módulo.
}) // Este decorador define un módulo de NestJS. Un módulo es una clase que agrupa componentes relacionados, como controladores y servicios, para organizar la aplicación de manera modular.
export class TasksModule {}
