import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import bootStrap from './bootstrap';

async function main() {
    const app = await NestFactory.create(AppModule);
    const config = app.get(ConfigService);

    const globalPrefix = config.get('globalPrefix');
    app.setGlobalPrefix(globalPrefix);

    app.useGlobalInterceptors(new TransformInterceptor());

    bootStrap(app);

    const port = config.get('port');
    await app.listen(port);
    console.log(`app running in ${port}`);
}
main();
