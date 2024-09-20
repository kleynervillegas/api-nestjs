import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throwError } from 'rxjs';
import { UserEntity } from 'src/Entitys/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor() { }

    private userData: any = [];

    getAllUser() {
        return this.userData;
    }

    getUserById(id: number) {
        const find =this.userData.find(e => e.id = id);
        if(!find){
            throw new Error("no encontrado");
        }
        return find;
    }

    getUserByName(name: string) {
        const find =this.userData.find(e => e.name = name);
        if(!find){
            throw new Error("no encontrado");
        }
        return find;
    }


    createUser(body) {
        this.userData.push({
            name: body.name,
            id: this.userData.length + 1
        });
        return true;
    }
}
