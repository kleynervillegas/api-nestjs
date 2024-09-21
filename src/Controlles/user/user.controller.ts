import { Body, Controller, Get, Post, Req, Res,UsePipes, ValidationPipe} from '@nestjs/common';
import { endpoints } from 'src/common/enpoints';
import { UserService } from 'src/services/user/user.service';
import { Request, Response } from 'express'
import { UserDto } from 'src/Dto/UserDto';
@Controller("user/")
export class UserController {

    constructor(private readonly userService: UserService) { }
    //Buscar todos los usurios
    @Get(endpoints.allUser)
    getAllUser(@Req() req: Request, @Res() res: Response) {
        try {
            const Response = this.userService.getAllUser();
            return res.status(200).json({
                message: "Success",
                data: Response
            });
        } catch (error) {

            return res.status(500).json({
                message: "Error internal server",
                data: []
            });
        }
    }
    //Buscar un usuarios por id
    @Get(endpoints.getOne)
    getUserById(@Req() req: Request, @Res() res: Response) {
        try {
            const id: any = req.query.id;
            const Response = this.userService.getUserById(id);
            return res.status(200).json({
                message: "Success",
                data: Response
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
                data: null
            });
        }
    }
    //Buscar un usuarios por nombre
    @Get(endpoints.getOneName)
    getUserByName(@Req() req: Request, @Res() res: Response) {
        try {
            const params: any = req.params.name;
            const Response = this.userService.getUserByName(params);
            return res.status(200).json({
                message: "Success",
                data: Response
            });
        } catch (error) {
            return res.status(500).json({
                message: "Error internal server",
                data: []
            });
        }
    }
    //crear un usuarios
    @Post(endpoints.CreateUser)
    @UsePipes(new ValidationPipe())
    createUser(@Body() user: UserDto, @Res() res: Response) {
        try {
            const Response = this.userService.createUser(user);
            return res.status(200).json({
                message: "Success",
                data: Response
            });
        } catch (error) {
            return res.status(500).json({
                message: "Error internal server",
                data: []
            });
        }
    }
}
