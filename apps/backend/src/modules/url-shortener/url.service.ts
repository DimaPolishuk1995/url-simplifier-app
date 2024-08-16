import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from './interfaces/url.interface';

@Injectable()
export class UrlService {
  constructor(@InjectModel('Url') private readonly urlModel: Model<Url>) {}

  async create(originalUrl: string): Promise<Url> {
    const { nanoid } = await import('nanoid');
    const shortUrl = nanoid();
    const createdUrl = new this.urlModel({ originalUrl, shortUrl });
    return createdUrl.save();
  }

  async findOriginalUrl(shortUrl: string): Promise<Url> {
    return this.urlModel.findOne({ shortUrl }).exec();
  }

  async findAllUrls(): Promise<Url[]> {
    return this.urlModel.find().exec();
  }
}
