import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { PrismaService } from '../prisma.service'; // Asegúrate de importar PrismaService si lo estás utilizando en UsersService

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService], // Asegúrate de importar PrismaService si lo estás utilizando en UsersService
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users'); // Aca se esta aplicando el middleware LoggerMiddleware a todas las rutas que comienzan con 'users'
    // consumer.apply(LoggerMiddleware).forRoutes({
    //   path: 'users/profile', // Aca se esta aplicando el middleware LoggerMiddleware a la ruta 'users/profile'
    //   method: RequestMethod.GET, // Especifica que el middleware se aplica solo a las solicitudes GET a esta ruta
    // });
  }
}
