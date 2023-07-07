import { Module } from '@nestjs/common';
import { CongviecService } from './congviec.service';
import { CongviecController } from './congviec.controller';

@Module({
  controllers: [CongviecController],
  providers: [CongviecService]
})
export class CongviecModule {}
