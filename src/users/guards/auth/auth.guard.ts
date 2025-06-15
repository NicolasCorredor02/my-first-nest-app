import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

// Los guards en NestJS son una forma de proteger las rutas y controlar el acceso a ellas. En este caso, el guard `AuthGuard` es un ejemplo de un guard que podría usarse para autenticar a los usuarios antes de permitirles acceder a ciertas rutas o recursos.
// En NestJS, los guards se definen como clases que implementan la interfaz `CanActivate`.
// Esta interfaz requiere que se implemente el método `canActivate`, que determina si la solicitud entrante debe ser permitida o denegada.

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    // context es un objeto que contiene información sobre la solicitud entrante, como el tipo de solicitud (HTTP, WebSocket, etc.) y el objeto de solicitud HTTP.
    
    const request = context.switchToHttp().getRequest() as Request; // Obtiene el objeto de solicitud HTTP del contexto de ejecución.

    // Aca se esta validando que la solicitud tenga un encabezado de autorización.
    // Si no tiene un encabezado de autorización, se puede lanzar una excepción o retornar false para denegar el acceso.
    if (!request.headers['authorization']) {
      return false; // Si no hay encabezado de autorización, deniega el acceso.
    }

    return true;
  }
}
