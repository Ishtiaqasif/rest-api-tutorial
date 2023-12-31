import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login() {
    return "I'm login";
  }
  async signUp(dto: AuthDto) {
    const hash: string = await argon.hash(dto.password);
    const user = await this.prisma.user.create({
      data: { email: dto.email, hash },
    });

    delete user.hash;

    return user;
  }
}
