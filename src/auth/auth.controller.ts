import { Controller,Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  login(@Body() body){
    // {email,mat_khau}

    return this.authService.login(body);
  }

  @Post("/sign-up")
  signUp(@Body() body){
    // {ho_ten, email, mat_khau, ngay_sinh}

    return this.authService.signUp(body);
  }

}
