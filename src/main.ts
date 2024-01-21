import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { join } from 'path';
import { AppModule } from './app.module';
import hbs from 'handlebars';



async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars: hbs
    },
    includeViewExtension: true,
    options:{
      partials:{
        header: join('partials', 'header.hbs'),  
        footer: join('partials', 'footer.hbs'),   
      }
    },
    root: join(__dirname, '..', 'views'),
    templates: join(__dirname, '..', 'views'),
    layout: join('layouts', 'main.hbs'),
    defaultContext: {
      dev: process.env.NODE_ENV === "development", // Inside your templates, `dev` will be `true` if the expression evaluates to true
    },
  });

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
