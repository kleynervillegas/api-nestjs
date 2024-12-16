import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Res
} from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { ApiTags } from '@nestjs/swagger';
import { endPoints } from "../common/enpoints";
import { Request, Response } from 'express'
import { getMessageCode } from '../common/utils';

@Controller()
@ApiTags(endPoints.Login)

export class LoginController {

  constructor(private readonly loginService: LoginService) { }

  @Post(endPoints.Login)

  @UsePipes(new ValidationPipe())

  async Login(@Body() body: CreateLoginDto, @Res() res: Response) {
    const Response = await this.loginService.Login(body);    
    return res.status(getMessageCode(Response?.respose).code).set({ 'x-phrase': "phrase" }).json({
      message: getMessageCode(Response?.respose).message,
      data: Response.data
    });
  }
}
