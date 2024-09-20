import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { UserController } from './controlles/user/user.controller';
import { UserService } from './services/user/user.service';
import { UserEntity } from './entitys/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'api-nestjs',
      entities: [UserEntity],
      synchronize: true,
    }),
    UserModule,


  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
