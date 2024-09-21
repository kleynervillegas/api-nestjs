import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/primas.services';

@Injectable()
export class UsersService {
  private userData: any = [];

  constructor(private prisma: PrismaService) { }


  async getAllUser(): Promise<any> {
    return this.prisma.user.findMany()
      .then((res) => {
        return { data: res, respose: "success" };
      }).catch(() => {
        return { data: null, respose: "badRequest" };
      })
  }

  getUserById(id: number) {
    const find = this.userData.find(e => e.id = id);
    if (!find) {
      throw new Error("no encontrado");
    }
    return find;
  }

  getUserByName(name: string) {
    const find = this.userData.find(e => e.name = name);
    if (!find) {
      throw new Error("no encontrado");
    }
    return find;
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
