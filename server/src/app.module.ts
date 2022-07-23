import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './app/article/article.module';
import { AdminUserModule } from './admin/user/user.module';
import { AdminArticleModule } from './admin/article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => configService.get('db'),
        }),
        ArticleModule,
        AdminUserModule,
        AdminArticleModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
