// src/parkir/dto/update-parkir.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateParkirDto } from './create-parkir.dto';
import { IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

// Perhatikan: UpdateParkirDto hanya mewarisi properti dari CreateParkirDto
export class UpdateParkirDto extends PartialType(CreateParkirDto) {
    // Kita hanya fokus pada durasi yang boleh diubah
    @Type(() => Number)
    @IsNumber({}, { message: 'durasi harus berupa angka.' })
    @Min(1, { message: 'durasi harus lebih dari 0.' })
    durasi: number; 
}