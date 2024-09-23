import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/primas.services';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) { }


  async getAllUser(): Promise<any> {
    return this.prisma.user.findMany()
      .then((res) => {
        return { data: res, respose: "success" };
      }).catch(() => {
        return { data: null, respose: "badRequest" };
      })
  }

  async getUserById(id: any): Promise<any> {
    return this.prisma.user.findMany({
      where: {
        id: id,
      }
    })
      .then((res) => {
        return { data: res, respose: "success" };
      }).catch(() => {
        return { data: null, respose: "badRequest" };
      })
  }

  async getUserByName(item: any): Promise<any> {
    return this.prisma.user.findMany({where: {name:item.value}})
      .then((res) => {
        return { data: res, respose: "success" };
      }).catch((e) => {
        console.log(e);
        
        return { data: null, respose: "badRequest" };
      }) 
  }

  async createUser(user: CreateUserDto): Promise<any> {
    return this.prisma.user.create({ data: user })
      .then((res) => {
        return { data: res, respose: "success" };
      }).catch(() => {
        return { data: null, respose: "badRequest" };
      })
  }
}
