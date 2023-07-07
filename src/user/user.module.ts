import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports:[JwtModule.register({})],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
