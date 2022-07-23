import { PartialType, ApiProperty } from '@nestjs/swagger';

import PageDto from 'src/common/dto/page/page.dto';
export class ArticlePageDto extends PartialType(PageDto) {
    @ApiProperty({
        description: 'TAG名字',
        required: false,
    })
    tag?: string;
}
