import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  async shortenUrl(@Body('originalUrl') originalUrl: string) {
    if (!originalUrl) {
      throw new HttpException(
        'Original URL is required',
        HttpStatus.BAD_REQUEST,
      );
    }
    const url = await this.urlService.create(originalUrl);
    return { shortUrl: url.shortUrl };
  }

  @Get(':shortUrl')
  async redirect(@Param('shortUrl') shortUrl: string, @Res() res: Response) {
    const url = await this.urlService.findOriginalUrl(shortUrl);
    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ message: 'URL not found' });
    }
  }

  @Get()
  async getAllUrls() {
    return await this.urlService.findAllUrls();
  }
}
