import * as fs from 'fs';
import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { generate } from '../pdf/book.pdf';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() bookDto: BookDto) {
    return this.booksService.create(bookDto);
  }

  @Get()
  getAllBooks() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }

  @Post('/pdf/:id')
  async generatePDF(@Param('id') id: string) {
    const name = 'book.pdf';
    const book = await this.booksService.findOne(id);
    const pdfDoc = generate(book);

    pdfDoc.pipe(fs.createWriteStream(name));
    pdfDoc.end();


    return {'file_name': name};
  }
}
