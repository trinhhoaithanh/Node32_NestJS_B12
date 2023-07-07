import { Controller,Get,Post, Put,Delete, UseGuards,Headers,HttpCode,HttpException,Req, UseInterceptors,UploadedFile, Param } from '@nestjs/common';
import { UserService } from './user.service';
import {nguoi_dung} from '@prisma/client'
import { AuthGuard } from '@nestjs/passport/dist';
import {JwtService} from '@nestjs/jwt';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

// localhost:3000/user/get-user

// khoá hết api thì bỏ ở đây 
// @UseGuards(AuthGuard("jwt"))
@Controller('/user')
export class UserController {
    constructor(private userService:UserService,private jwtService:JwtService){}

    @UseInterceptors(FileInterceptor("file",{
        storage:diskStorage({
            destination:process.cwd()+"/public/img",  //nơi lưu hình 
            filename:(req,file,callback)=>callback(null,new Date().getTime() + file.originalname) //đổi tên hình
        })
    }))
    @Post("/upload-avatar/:userId")
    uploadAvatar(@UploadedFile() file:Express.Multer.File,@Param("userId") userId: string){
        // lưu hình vào source BE
        // yarn add -D @types/multer

        // Lưu tên hình vào CSDL
        return this.userService.uploadAvatar(file, Number(userId));

    }

    // read
    // khóa một api thì để ở đây 
    @UseGuards(AuthGuard("jwt"))
    @HttpCode(200)
    @Get()
    getUser(@Headers("token") token):Promise<nguoi_dung[]>{

        try{
            if(this.jwtService.verify(token)){

                return this.userService.getUser()
            }
            else{
                throw new HttpException("Unauthorized",401);
            }
        }
        catch{
            throw new HttpException("Lỗi BE",500);
        }
       
    }

    // getUser(@Req() req:Request,@Headers("token") token){
    //     return req.user;
        
       
    // }

    // Get
    @UseGuards(AuthGuard("jwt"))
    @Get("/:id")
    getUserById(){
        return "Get user by id"
    }

    // Post
    @Post()
    createUser(){
        return "create user"
    }

    // Put
    @Put("/:id")
    updateUser(){
        return "update user"
    }

    // Delete
    @Delete("/:id")
    removeUser(){
        return "remove User"
    }


}
