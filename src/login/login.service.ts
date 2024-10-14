import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { PrismaService } from '../primas.services';
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";

@Injectable()
export class LoginService {

  constructor(private prisma: PrismaService) { }

  async Login(createLoginDto: CreateLoginDto): Promise<any> {

    const user = await this.prisma.user.findFirst({ where: { email: createLoginDto.email } });

    if (user) {

      if (await bcrypt.compare(createLoginDto.password, user.password)) {

        const token = jwt.sign(
          user,
          process.env['JWT_KEY'],
          { expiresIn: process.env['expires_token'] }
        )

        return { data: token, respose: "success" };

      } else {

        return { data: null, respose: "Unauthorized" };

      }
    } else {

      return { data: null, respose: "badRequest" };
    }
  }
}
