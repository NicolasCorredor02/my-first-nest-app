import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsInt()
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
