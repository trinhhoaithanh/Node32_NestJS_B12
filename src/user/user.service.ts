import { Injectable, HttpException } from '@nestjs/common';

import { PrismaClient, nguoi_dung } from '@prisma/client';
@Injectable()
export class UserService {
  prisma = new PrismaClient();
  async getUser(): Promise<nguoi_dung[]> {
    let data = await this.prisma.nguoi_dung.findMany();
    return data;
  }

  async uploadAvatar(file: Express.Multer.File, userId: number) {
    try {
      let getUserById = await this.prisma.nguoi_dung.findFirst({
        where: {
          id: userId,
        },
      });
      if (getUserById) {
        // cập nhật dữ liệu mới
        getUserById.hinh_dai_dien = file.filename;
        // update dữ liệu lên database
        await this.prisma.nguoi_dung.update({
          data: getUserById,
          where: {
            id: userId,
          },
        });
        return 'Upload avatar thành công';
      }

      return 'Không tìm thấy thông tin người dùng';
    } catch {
      throw new HttpException('Lỗi BE', 500500);
    }
  }
}
