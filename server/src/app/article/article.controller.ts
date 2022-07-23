import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { ArticleService } from './article.service';
import type { IArticleAdd } from 'src/common/models/article';

import { CreateDto } from './dto/create';
import { UpdateDto } from './dto/update';
import { ArticlePageDto } from './dto/page';

@ApiTags('文章')
@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) {}

    @Get()
    getPage(@Query() query: ArticlePageDto) {
        return `page=${query.page} size=${query.size}`;
    }

    @Get(':id')
    getDetail() {
        return '文章详情';
    }

    // @Post()
    // create(@Body() articleCreateDTO: CreateDto) {
    //     return this.articleService.create(articleCreateDTO);
    // }
}
