import {
    Controller,
    DefaultValuePipe,
    Get,
    ParseIntPipe,
    Query,
    Post,
    Body,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ArticleService } from './article.service';
import type { IArticleAdd } from 'src/common/models/article';

import { CreateDto } from './dto/create';
import { UpdateDto } from './dto/update'
import { PageDto } from './dto/page'

@ApiTags('01.文章')
@Controller('article')
export class ArticleController {
    constructor(private articleService: ArticleService) {}

    @Get()
    @ApiQuery({
        name: 'page',
        description: '页数',
    })
    @ApiQuery({
        name: 'size',
        description: '每页显示数量',
    })
    @ApiQuery({
        name: 'tag',
        description: '标签',
        required: false,
    })
    getPage(
        @Query('page', new DefaultValuePipe(1), new ParseIntPipe())
        page: number,
        @Query('size', new DefaultValuePipe(10), new ParseIntPipe())
        size: number,
        @Query('tag') tag?: string,
    ) {
        return `page=${page} size=${size}`;
    }

    @Get(':id')
    getDetail() {
        return '文章详情';
    }

    @Post()
    create(@Body() article: IArticleAdd) {
        return this.articleService.create(article)
    }
}
