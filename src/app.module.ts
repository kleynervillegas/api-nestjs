import { Module } from '@nestjs/common';

import { PaymentsModule } from './payments/payments.module';
import { PrismaService } from './primas.services';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PaymentsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
