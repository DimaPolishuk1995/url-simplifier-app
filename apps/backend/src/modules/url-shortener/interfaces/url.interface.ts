import { Document } from 'mongoose';

export interface Url extends Document {
  readonly originalUrl: string;
  readonly shortUrl: string;
}