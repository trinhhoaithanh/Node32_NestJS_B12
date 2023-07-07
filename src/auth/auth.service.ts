import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import {JwtService} from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
    
    constructor(private jwtService:JwtService,
        private configService:ConfigService
        
        ) {}

    prisma = new PrismaClient();

    login(userLogin){
        // tìm bằng email

        // true: check mat_khau
        //false mau_khau: báo mật khẩu không đúng

        //false:báo mail tồn tại

        // return "token";

        let token = this.jwtService.signAsync({data:"data"},{secret:this.configService.get("KEY"),expiresIn:"5m"});
        return token;
    }
    
    signUp(userSignUp){
        // this.prisma.nguoi_dung.create({data:userSignUp})
        // check email trùng

        //false: trùng báo lỗi mail trùng

        // true: tạo mới user

        // return ";"
    }
}
