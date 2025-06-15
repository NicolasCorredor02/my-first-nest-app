import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  createUser(user: CreateUserDto): UserDto {
    const newUser = this.prisma.user.create({
      data: user,
    });
    return newUser as UserDto;
  }

  getUsers() {
    return this.prisma.user.findMany();
  }

  getProfile(id: number): UserDto | NotFoundException {
    const user = this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}
