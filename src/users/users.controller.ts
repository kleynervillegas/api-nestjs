import {
  Body, Controller,
  Delete, Get, Param,
  Patch, Post, Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { getMessageCode } from 'src/common/utils';
import { Request, Response } from 'express'
import { endPoints } from 'src/common/enpoints';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/middleware/auth/auth.guard';
@Controller()
@ApiTags(endPoints.usersPath)
@UseGuards(AuthGuard)
@ApiHeader({
  name: 'token',
  description: 'Token de autenticacion',
})
@ApiResponse({ status: 201, description: 'Operacion exitosa' })
@ApiResponse({ status: 401, description: 'Perfil no autorizado' })
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  //Buscar todos los usurios
  @Get(endPoints.usersPath)
  async getAllUser(@Req() req: Request, @Res() res: Response): Promise<any> {
    const Response = await this.usersService.getAllUser();
    return res.status(getMessageCode(Response.respose).code).json({
      message: getMessageCode(Response.respose).message,
      data: Response.data
    });
  }
  //Buscar un usuarios por id
  @Get(endPoints.getOneByid)
  async getUserById(@Req() req: Request, @Res() res: Response) {
    const params: any = req.params.id;
    const Response = await this.usersService.getUserById(params);
    return res.status(getMessageCode(Response.respose).code).json({
      message: getMessageCode(Response.respose).message,
      data: Response.data
    });
  }
  // //Buscar un usuarios por nombre
  @Get(endPoints.getOneByName)
  async getUserByName(@Req() req: Request, @Res() res: Response) {
    const Response = await this.usersService.getUserByName({ value: req.query.value, row: req.query.row });
    return res.status(getMessageCode(Response.respose).code).json({
      message: getMessageCode(Response.respose).message,
      data: Response.data
    });
  }
  //crear un usuarios
  @Post(endPoints.UsersPost)
  @UsePipes(new ValidationPipe())
  async createUser(@Body() user: CreateUserDto, @Res() res: Response) {
    const Response = await this.usersService.createUser(user);
    return res.status(getMessageCode(Response?.respose).code).json({
      message: getMessageCode(Response?.respose).message,
      data: Response.data
    });
  }
}
