import { Module } from '@nestjs/common';
import { AdminUserService } from './user.service';
import { AdminUserController } from './user.controller';

@Module({
    imports: [],
    providers: [AdminUserService],
    controllers: [AdminUserController],
})
export class AdminUserModule {}
