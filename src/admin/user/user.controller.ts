import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import PageDto from 'src/common/dto/page/page.dto';

@ApiTags('用户')
@Controller('admin/user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    @ApiOperation({
        summary: '用户列表',
    })
    getPage(@Query() query: PageDto) {
        console.log(query);
        return `success`;
    }
}
