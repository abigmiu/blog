import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AdminUserService } from './user.service';
import PageDto from 'src/common/dto/page/page.dto';

@ApiTags('用户')
@Controller('admin/user')
export class AdminUserController {
    constructor(private userService: AdminUserService) {}

    @Get()
    @ApiOperation({
        summary: '用户列表',
    })
    getPage(@Query() query: PageDto) {
        console.log(query);
        return `success`;
    }
}
