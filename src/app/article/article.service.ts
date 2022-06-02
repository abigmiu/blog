import { Injectable } from '@nestjs/common';
import type { IArticle, IArticleAdd } from 'src/common/models/article';
import { CreateDto } from './dto/create';
import { UpdateDto } from './dto/update';
import { IdDto } from './dto/id';
import { Article } from 'src/db/article/article.entity';
import { PageDto } from './dto/page';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class ArticleService {
    private list: Array<IArticle>

    private uid: number

    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>
    ) {
        this.list = []
        this.uid = 0
    }

    getPage(page: number, size: number) {
        return this.list.slice(page * size, (page + 1) * size)
    }

    getDetail(id: number) {
        const index = this.list.findIndex(item => item.id === id)
        return this.list[index]
    }

    create(article: IArticleAdd) {
        this.uid = this.uid + 1
        const item: IArticle = {
            id: this.uid,
            title: article.title,
            content: article.content,
            createdAt: new Date().toISOString(),
            updateAt: new Date().toISOString(),
            intro: article.content.slice(0, 100),
            isDel: false,
            isTop: false,
        }
        this.list.push(item)
    }
}
