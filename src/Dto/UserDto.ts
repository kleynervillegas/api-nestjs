import { IsString, IsNumber, isEmail, IsEmail } from 'class-validator'

export class UserDto {
        @IsString()
        name: string
        @IsString()
        last_name: string
        @IsString()
        @IsEmail()
        email: string
}   