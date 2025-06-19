import { Request, Response, NextFunction } from 'express';
import Book from '../modules/book.module';

// 1. Create Book
export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ success: true, message: 'Book created successfully', data: book });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to create book', error });
  }
};

// 2. Get all books with filter/sort/limit
export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const books = await Book.find();
    res.json({ success: true, message: 'Books retrieved successfully', data: books });
  } catch (error) {
    next(error);
  }
};

