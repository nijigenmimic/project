import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { IndexModule } from './index/index.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(IndexModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'view'));
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
