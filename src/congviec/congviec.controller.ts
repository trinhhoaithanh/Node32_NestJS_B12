import { Controller, Get, Post, Body, Patch, Param, Delete,Put, } from '@nestjs/common';
import { CongviecService } from './congviec.service';
import { CreateCongviecDto } from './dto/create-congviec.dto';
import { UpdateCongviecDto } from './dto/update-congviec.dto';
import {ApiTags} from '@nestjs/swagger'
@ApiTags("cong-viec")
@Controller('congviec')
export class CongviecController {
  constructor(private readonly congviecService: CongviecService) {}

  @Put("thay-doi-trang-thai/:congViecId/:trangThai")
  thayDoiTrangThai(@Param("congViecId") congViecId, @Param("trangThai") trangThai){
    return this.congviecService.thayDoiTrangThai(Number(congViecId),Number(trangThai))
  }

  @Post()
  create(@Body() createCongviecDto: CreateCongviecDto) {
    return this.congviecService.create(createCongviecDto);
  }

  @Get()
  findAll() {
    return this.congviecService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.congviecService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCongviecDto: UpdateCongviecDto) {
    return this.congviecService.update(+id, updateCongviecDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.congviecService.remove(+id);
  }
}
