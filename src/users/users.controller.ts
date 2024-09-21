import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { getMessageCode } from 'src/common/utils';
import { Request, Response } from 'express'
import { endpoints } from 'src/common/enpoints';
@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  //Buscar todos los usurios
  @Get()
  async getAllUser(@Req() req: Request, @Res() res: Response): Promise<any> {
    const Response = await this.usersService.getAllUser();
    return res.status(getMessageCode(Response.respose).code).json({
      message: getMessageCode(Response.respose).message,
      data: Response.data
    });
  }
  //Buscar un usuarios por id
  @Get("/:id")
  async getUserById(@Req() req: Request, @Res() res: Response) {
    const params: any = req.params.id;
    const Response = await this.usersService.getUserById(params);
    return res.status(getMessageCode(Response.respose).code).json({
      message: getMessageCode(Response.respose).message,
      data: Response.data
    });
  }

  // //Buscar un usuarios por nombre
  @Get(':name')
  async getUserByName(@Req() req: Request, @Res() res: Response) {
    const params: any = req.query.name;
    const Response = await this.usersService.getUserByName(params);
    return res.status(getMessageCode(Response.respose).code).json({
      message: getMessageCode(Response.respose).message,
      data: Response.data
    });
  }

  //crear un usuarios
  @Post()
  @UsePipes(new ValidationPipe())
  async createUser(@Body() user: CreateUserDto, @Res() res: Response) {
    const Response = await this.usersService.createUser(user);
    return res.status(getMessageCode(Response?.respose).code).json({
      message: getMessageCode(Response?.respose).message,
      data: Response.data
    });
  }
}
