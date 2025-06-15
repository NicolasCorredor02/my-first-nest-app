import { Controller, Get, Post, UsePipes, ValidationPipe, Body, UseGuards, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('/users')
export class UsersController {
    constructor(private usersService: UsersService) {
        this.usersService = usersService;
    }


    @Get('')
    getAllUsers() {
        return this.usersService.getUsers();
    }


    @Post('')
    @UsePipes(new ValidationPipe())
    createUser(@Body() user: CreateUserDto) {
        return this.usersService.createUser(user);
    }

    @Get('/profile')
    @UseGuards(AuthGuard)
    getProfile(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getProfile(id);
    }

}
