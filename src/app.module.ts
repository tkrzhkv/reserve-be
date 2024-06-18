import { Module } from '@nestjs/common';
import { UserModule } from './nest/user/user.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [UserModule, PrismaModule],
    providers: [UserService],
    controllers: [UserController],
})
export class AppModule {}
