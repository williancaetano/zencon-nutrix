import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('ZenCon Backend')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors({
    methods: ['GET', 'POST'],
    origin: ['http://127.0.0.1:3000', 'http://192.168.0.54:3000', 'https://zencon.gsense.club'],
    credentials: true,
  });
  await app.listen(4000);
}
bootstrap();
