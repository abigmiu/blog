import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('/api')

   const options = new DocumentBuilder()
      .setTitle('Blog Api')
      .setDescription('The Blog Api Description')
      .setVersion('1.0')
      .build();

   const document = SwaggerModule.createDocument(app, options);
   SwaggerModule.setup('doc', app, document);

   await app.listen(3005);
   console.log('app running in 3005');
}
bootstrap();
