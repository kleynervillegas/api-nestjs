import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';

import { PaymentsModule } from './payments/payments.module';
import { PrismaService } from './primas.services';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UserModule,
    PaymentsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
