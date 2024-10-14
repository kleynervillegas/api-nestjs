import { Module } from '@nestjs/common';

import { PaymentsModule } from './payments/payments.module';
import { PrismaService } from './primas.services';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    PaymentsModule,
    UsersModule,
    LoginModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
