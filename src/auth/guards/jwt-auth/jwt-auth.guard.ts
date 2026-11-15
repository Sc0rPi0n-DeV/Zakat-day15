
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
@Injectable()
export class JwtAuthGuard implements CanActivate {
 constructor(
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    // 1. Get the HTTP request
    const request = context
      .switchToHttp()
      .getRequest<Request>();

    // 2. Read Authorization header
    const authorization = request.headers.authorization;

    if (!authorization) {
      throw new UnauthorizedException('Token is missing');
    }

    // 3. Extract Bearer token
    const [type, token] = authorization.split(' ');

    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException(
        'Invalid authorization header',
      );
    }

    // 4. Verify JWT
    try {
      const payload = await this.jwtService.verifyAsync(token);

      // 5. Store decoded payload in request
      (request as any).user = payload;
     // request['user'] = payload;
    

    } catch {
      throw new UnauthorizedException(
        'Invalid or expired token',
      );
    }

    // 6. Allow request
    return true;
  }
}
