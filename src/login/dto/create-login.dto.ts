import { IsString, IsNumber, isEmail, IsEmail } from 'class-validator'

export class CreateLoginDto {
    @IsString()
    @IsEmail()
    email: string 
    @IsString()
    password:string
}
