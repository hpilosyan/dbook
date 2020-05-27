import { IsNotEmpty, IsBoolean } from 'class-validator';

export class BookDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  descritpion: string;

  @IsBoolean()
  isActive: boolean;
}