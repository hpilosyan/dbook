import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    BooksModule,
    TypeOrmModule.forRoot(),
    BullModule.registerQueue({
      name: 'email',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
