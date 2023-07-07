import { Body, Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
type userType = {
  hoTen:String,
  phone:number,
  address:String
}  //type này sẽ được để vào entity folder DTO => Data Transfer Object 

// exp DTO
// user => 3 thuộc tính
// order => 3 thuộc tính
// tạo ra userOrder => 6 thuộc tính 
@Controller("/user")
export class AppController {
  constructor(private readonly appService: AppService) {}


  // C1: request (req, params, req.body)
  // C2: decorator của nestjs 
  @Get("/demo/:id/:title") //endpoint chức năng 
  getHello(@Req() req:Request, @Param("id") id:String,@Param("title") title:String, @Query("email") email:String, @Body() body:any): string {
    // request 

    // C1:
    // localhost:8080/app/demo?email=abc@gmail.com 
    // let {id} = req.params;
    // let {email}  = req.query;
    // let {hoTen, phone} = req.body;

    // C2: 
    let {hoTen, phone, address} = body;

    return "Hello node32";
  }

  @Get("/tinh-tong/:nOne/:nTwo") //tinh-tong/1/2
  tinhTong(@Param("nOne") nOne:number,@Param("nTwo") nTwo:number): number { //:number nó không ép kiểu mà nó chỉ quy định thoi 
   
   return this.appService.getTong(Number(nOne),Number(nTwo));
  }
}


