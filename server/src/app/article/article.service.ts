import { Injectable } from '@nestjs/common';
import type { IArticle, IArticleAdd } from 'src/common/models/article';

@Injectable()
export class ArticleService {
    private list: Array<IArticle>;

    private uid: number;

    constructor() {
        this.list = [];
        this.uid = 0;
    }

    getPage(page: number, size: number) {
        return this.list.slice(page * size, (page + 1) * size);
    }

    getDetail(id: number) {
        const index = this.list.findIndex((item) => item.id === id);
        return this.list[index];
    }
}
