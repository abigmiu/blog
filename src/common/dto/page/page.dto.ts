import { ApiProperty } from '@nestjs/swagger';

export default class PageDto {
    @ApiProperty({
        description: '页数',
        type: 'number',
        default: 1,
        required: false,
    })
    page: number;

    @ApiProperty({
        description: '每页数量',
        type: 'number',
        default: 10,
        required: false,
    })
    size: number;
}
