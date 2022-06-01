import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './app/article/article.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '22d02ef3dc2160b6',
            database: 'blog',
            entities: ['dist/db/**/*.entity.ts']
        }),
        ArticleModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
