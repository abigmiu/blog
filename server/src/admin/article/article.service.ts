import { Injectable } from '@nestjs/common';
import { AdminArticleCreateDto } from './dto/create.dto';
import { Article } from 'src/db/article/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminArticleService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>,
    ) {}

    async create(createDto: AdminArticleCreateDto) {
        const article = new Article();
        article.content = createDto.content;
        article.title = createDto.title;
        article.intro = createDto.content.slice(0, 100);
        article.tagId = article.tagId || 1;
        article.categoryId = article.categoryId || 1;
        console.log(article);
        await this.articleRepository.save(article);
        return 'success';
    }
}
