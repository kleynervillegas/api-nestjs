import {IsString ,IsNumber}  from 'class-validator'

export class UserDto {
        id: number
        @IsString()
        name: string
        @IsString()
        lastName: string
}   