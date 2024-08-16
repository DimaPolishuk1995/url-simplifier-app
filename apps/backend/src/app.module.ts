import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlModule } from './modules/url-shortener/url.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/urlsimplifier',
    ),
    UrlModule,
  ],
})
export class AppModule {}
