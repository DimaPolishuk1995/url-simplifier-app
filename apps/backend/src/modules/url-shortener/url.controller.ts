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
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('url')
@ApiTags('URL Shortener')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  @ApiOperation({ summary: 'Shorten a new URL' })
  @ApiBody({
    description: 'Original URL',
    schema: { example: { originalUrl: 'https://example.com' } },
  })
  @ApiResponse({
    status: 201,
    description: 'The URL has been successfully shortened.',
  })
  @ApiResponse({ status: 400, description: 'Original URL is required.' })
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
  @ApiOperation({ summary: 'Redirect to the original URL' })
  @ApiResponse({ status: 302, description: 'Redirects to the original URL.' })
  @ApiResponse({ status: 404, description: 'URL not found.' })
  async redirect(@Param('shortUrl') shortUrl: string, @Res() res: Response) {
    const url = await this.urlService.findOriginalUrl(shortUrl);
    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ message: 'URL not found' });
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all shortened URLs' })
  @ApiResponse({ status: 200, description: 'Returns all shortened URLs.' })
  async getAllUrls() {
    return await this.urlService.findAllUrls();
  }
}
