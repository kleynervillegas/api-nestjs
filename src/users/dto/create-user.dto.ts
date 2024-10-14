import { IsString, IsNumber, isEmail, IsEmail } from 'class-validator'

export class CreateUserDto {
    @IsString()
    name: string
    @IsString()
    last_name: string
    @IsString()
    @IsEmail()
    email: string
    @IsString()
    password:string
}
