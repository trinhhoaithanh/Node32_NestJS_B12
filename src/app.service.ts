import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTong(nOne:number,nTwo:number): number {
     let tinhTong = nOne+ nTwo;
    return tinhTong;
  }
}
