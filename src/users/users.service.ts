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

  async getUserById(name: any):Promise<any> {
    return this.prisma.user.findMany({
      where: {
        name: name,
      }
    })
    .then((res) => {
      return { data: res, respose: "success" };
    }).catch(() => {
      return { data: null, respose: "badRequest" };
    })
  }

  async getUserByName(name: string):Promise<any> {
    return this.prisma.user.findMany()
    .then((res) => {
      return { data: res, respose: "success" };
    }).catch(() => {
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
