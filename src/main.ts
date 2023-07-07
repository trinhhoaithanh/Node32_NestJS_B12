import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();  //CORS
  app.use(express.static(".")); //định vị lại đường dẫn để load tài nguyên 


  // swagger
  //yarn add @nestjs/swagger swagger-ui-express
  const config = new DocumentBuilder().setTitle("Node 32").build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup("/swagger",app,document);

  await app.listen(8080);
}
bootstrap();

// user => controller, module, service

// food => controller, module, service

// module => nest g module user
// controller => nest g controller user --no-spec
// service => nest g service user  --no-spec

// cong_viec
// nest g resource congviec --no-spec

// yarn add prisma @prisma/client
// yarn prisma init
// yarn prisma db pull
// yarn prisma generate 

// lấy dữ liệu từ biến môi trường
// yarn add @nestjs/config

// tạo đối tượng auth
// nest g resource auth --no-spec

