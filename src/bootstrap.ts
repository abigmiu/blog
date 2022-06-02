import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import type { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

function initSwagger(app: INestApplication, config: ConfigService) {
    const options = new DocumentBuilder()
        .setTitle('Blog Api')
        .setDescription('The Blog Api Description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);

    const swaggerPrefix = config.get('swaggerPrefix');
    SwaggerModule.setup(swaggerPrefix, app, document);
}

export default function bootStrap(app: INestApplication) {
    const config = app.get(ConfigService);
    initSwagger(app, config);
}
