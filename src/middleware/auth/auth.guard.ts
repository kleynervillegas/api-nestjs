import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from "jsonwebtoken";


@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    let request = context.switchToHttp().getRequest();
    if (request.headers.token) {
      const verifuc: any = jwt.verify(request.headers.token, process.env['JWT_KEY'], (error, descoded) => {
        if (error) {
          return false;
        } else {
          request.user = descoded
          return true;
        }
      });
      return verifuc
    } else {
      return false;
    }
  }
}
