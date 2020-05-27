import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  create(bookDto: BookDto): Promise<Book> {
    return this.booksRepository.save(bookDto);
  };

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(id: string): Promise<Book> {
    return this.booksRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.booksRepository.delete(id);
  }
}
