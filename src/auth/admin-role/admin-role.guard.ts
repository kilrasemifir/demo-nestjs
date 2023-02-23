import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class AdminRoleGuard extends AuthGuard('mystrategy') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest()
    const user = req.user;
    const role = user.role;
    if (role !== "ADMIN"){
      throw new ForbiddenException()
    }
    return true;
  }
}
