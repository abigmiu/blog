import { PartialType, ApiProperty } from '@nestjs/swagger';
import PageDto from 'src/common/dto/page/page.dto';

export class AdminArticlePageDto extends PartialType(PageDto) {
    @ApiProperty({
        description: '关键字',
        required: false,
        type: String,
    })
    keyword?: string;

    // TODO:
    @ApiProperty({
        description: '标签',
        required: false,
    })
    tag?: number;
}
