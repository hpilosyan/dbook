import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  getBooks() {
    return 'Some book';
  }
}
