/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Delete } from '@nestjs/common';
import { AppService } from './app.service';

// / (root)
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }
    // /
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Post()
    sayGoodbye(): string {
        return this.appService.sayGoodbye();
    }

    // /delete
    @Delete("delete")
    deleteAction(): string {
        console.log(`deleted..`)
        return "deleted";
    }
}
