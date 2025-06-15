import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Esto elimina las propiedades que no están definidas en el DTO
  })); // Con esto se aplica la validación de pipes globalmente a todas las rutas de la aplicación. Siempre y cuando la ruta este usando un DTO que implemente class-validator y class-transformer
  

  // Esta es la configuración de Swagger para documentar la API. Swagger es una herramienta que permite generar documentación interactiva para APIs RESTful.
  // En este caso, se está configurando Swagger para la aplicación NestJS, definiendo el título, la descripción y la versión de la API.
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors(); // Esto habilita CORS (Cross-Origin Resource Sharing) para permitir solicitudes desde diferentes orígenes. Es útil cuando la API se consume desde un frontend que se ejecuta en un dominio diferente.

  // Cuando se quiera especificar un origin específico, se puede hacer de la siguiente manera:
  // app.enableCors({
  //   origin: 'http://example.com', // Reemplaza con el origen permitido
  // });
  // O si se quiere permitir múltiples orígenes, se puede hacer de la siguiente manera:
  // app.enableCors({
  //   origin: ['http://example.com', 'http://another-example.com'], // Reemplaza con los orígenes permitidos
  // });
  // Si se quiere permitir todos los orígenes, se puede hacer de la siguiente manera:
  // app.enableCors({
  //   origin: '*', // Permite todos los orígenes
  // });
  // Si se quiere permitir solo ciertos métodos HTTP, se puede hacer de la siguiente manera:
  // app.enableCors({
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Reemplaza con los métodos permitidos
  // });
  // Si se quiere permitir ciertos encabezados HTTP, se puede hacer de la siguiente manera:
  // app.enableCors({
  //   allowedHeaders: 'Content-Type, Authorization', // Reemplaza con los encabezados permitidos
  // });
  // Si se quiere permitir credenciales (cookies, autenticación HTTP, etc.), se puede hacer de la siguiente manera:
  // app.enableCors({
  //   credentials: true, // Permite el envío de credenciales
  // });
  // Si se quiere permitir el uso de cookies, se puede hacer de la siguiente manera:
  // app.enableCors({
  //   credentials: true, // Permite el envío de cookies
  //   origin: 'http://example.com', // Reemplaza con el origen permitido
  // });
  // Si se quiere permitir el uso de cookies, credenciales, encabezados personalizados y métodos HTTP específicos, se puede hacer de la siguiente manera:
  // app.enableCors({
  //   credentials: true, // Permite el envío de cookies y credenciales
  //   origin: 'http://example.com', // Reemplaza con el origen permitido
  //   allowedHeaders: 'Content-Type, Authorization, X-Custom-Header', // Reemplaza con los encabezados permitidos
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Reemplaza con los métodos permitidos
  // });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
