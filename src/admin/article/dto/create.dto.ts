import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
export class AdminArticleCreateDto {
    @ApiProperty({
        description: '标题',
        default: '标题',
    })
    @Length(5, 30, {
        message: '字数为5-30个字',
    })
    title: string;

    @ApiProperty({
        description: '内容',
        default: '内容',
    })
    @IsNotEmpty({
        message: '内容不能为空',
    })
    content: string;

    @ApiProperty({
        description: '标签',
        required: false,
        default: 1,
    })
    tagId: number;

    @ApiProperty({
        description: '分类ID',
        required: false,
        default: 1,
    })
    categoryId: number;
}
