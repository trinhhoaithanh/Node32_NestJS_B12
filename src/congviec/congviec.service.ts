import { Injectable,Put,Param,HttpException } from '@nestjs/common';
import { CreateCongviecDto } from './dto/create-congviec.dto';
import { UpdateCongviecDto } from './dto/update-congviec.dto';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class CongviecService {
  
  prisma = new PrismaClient()

  async thayDoiTrangThai(congViecId, trangThai) {
    try {
      // tìm công việc theo id
      let congViecById = await this.prisma.cong_viec.findFirst({
        where: {
          ma_cong_viec: congViecId
        }
      });

      // cập nhật dữ liệu mới 
      congViecById.ma_trang_thai = trangThai;

      // update vào CSDL
      await this.prisma.cong_viec.update({
        data: congViecById, where: {
          ma_cong_viec: congViecId
        }
      })
      return "Update trạng thái thành công";
    }
    catch {
      throw new HttpException("lỗi BE", 500);
    }
  }

  create(createCongviecDto: CreateCongviecDto) {
    return 'This action adds a new congviec';
  }

  findAll() {
    return `This action returns all congviec`;
  }

  findOne(id: number) {
    return `This action returns a #${id} congviec`;
  }

  update(id: number, updateCongviecDto: UpdateCongviecDto) {
    return `This action updates a #${id} congviec`;
  }

  remove(id: number) {
    return `This action removes a #${id} congviec`;
  }
}
