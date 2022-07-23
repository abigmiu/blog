import { Module } from '@nestjs/common';
import { AdminArticleService } from './article.service';
import { AdminArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from 'src/db/article/article.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    providers: [AdminArticleService],
    controllers: [AdminArticleController],
})
export class AdminArticleModule {}
