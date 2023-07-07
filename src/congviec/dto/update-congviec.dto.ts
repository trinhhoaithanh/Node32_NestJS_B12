import { PartialType } from '@nestjs/mapped-types';
import { CreateCongviecDto } from './create-congviec.dto';

export class UpdateCongviecDto extends PartialType(CreateCongviecDto) {}
