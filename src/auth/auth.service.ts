import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return "I'm login";
  }
  signUp() {
    return "I'm sign up";
  }
}
