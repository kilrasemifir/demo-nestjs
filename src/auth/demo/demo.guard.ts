import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { Observable } from 'rxjs';

@Injectable()
export class DemoGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    throw new ForbiddenException()
    return true;
  }
}
