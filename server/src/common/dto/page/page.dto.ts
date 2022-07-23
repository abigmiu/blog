import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export default class PageDto {
    @ApiProperty({
        description: '页数',
        type: 'number',
        default: 1,
        required: false,
    })
    @Type(() => Number)
    @IsInt({ message: 'page 只能为数字' })
    page?: number;

    @ApiProperty({
        description: '每页数量',
        type: 'number',
        default: 10,
        required: false,
    })
    @Type(() => Number)
    @IsInt({ message: 'size 只能为数字' })
    size?: number;
}
