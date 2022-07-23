import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdminArticleService } from './article.service';
import { AdminArticlePageDto, AdminArticleCreateDto } from './dto';

@ApiTags('admin文章')
@Controller('admin/article')
export class AdminArticleController {
    constructor(private articleService: AdminArticleService) {}

    @Get()
    @ApiOperation({
        summary: '文章列表',
    })
    @ApiResponse({
        status: 200,
        type: '',
    })
    getPage(@Query() query: AdminArticlePageDto) {
        console.log(query);
        return `success`;
    }

    @Post()
    @ApiOperation({
        summary: '提交文章',
    })
    create(@Body() body: AdminArticleCreateDto) {
        return this.articleService.create(body);
    }
}
