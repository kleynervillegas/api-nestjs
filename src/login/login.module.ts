import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { PrismaService } from '../primas.services';

@Module({
  controllers: [LoginController],
  providers: [LoginService,PrismaService],
})
export class LoginModule {}
