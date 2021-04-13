import { Injectable, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SessionEntity } from '../../database/entities/session.entity';
import { DecodedToken } from './interfaces';

@Injectable({ scope: Scope.REQUEST })
export class TokenManagerService {
  constructor(private readonly jwtService: JwtService) {}
  async createToken(session: SessionEntity): Promise<string> {
    const payload = {
      sessionToken: session.token,
    };
    return this.jwtService.sign(payload);
  }
  async verifyToken(token: string): Promise<DecodedToken> {
    return this.jwtService.verifyAsync(token).then(async (decodedToken) => {
      return decodedToken;
    });
  }
}
