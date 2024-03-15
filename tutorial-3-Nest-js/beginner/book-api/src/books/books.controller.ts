/* eslint-disable prettier/prettier */
// books/books.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Book } from './book.entity';
import { BooksService } from './books.service';

// / books
@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {
        console.log(`Books Controller constructor`)
    }

    @Get()
    getHello(): string {
        console.log(`book get request`)
        return "Hello from Books Controller";
    }

    @Get('details')
    getAllBooks(): Book[] {
        console.log(`book get request`)
        return this.booksService.getAllBooks();
    }
    // /books/details --> POST
    @Post('details')
    createBook(@Body() book: Book): void {
        console.log(`books post request`)
        this.booksService.createBook(book);
    }
}
