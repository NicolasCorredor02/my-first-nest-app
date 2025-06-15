import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

// Los middlewares en NestJS son funciones que se ejecutan antes de que se procese una solicitud. Se pueden usar para realizar tareas como la autenticación, el registro, la validación de datos, etc. En este caso, el middleware `LoggerMiddleware` es un ejemplo de un middleware que podría usarse para registrar información sobre las solicitudes entrantes, aunque actualmente no realiza ninguna acción específica.

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    // En este middleware, se registra el método de la solicitud y la URL original de la solicitud en la consola.
    console.log(`Request Method: ${req.method}, Request Original URL: ${req.originalUrl}`);
    
    next();
  }
}
