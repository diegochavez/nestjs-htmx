import { Get, Controller, Render, Redirect, Res } from '@nestjs/common';

@Controller()
export class AppController {
  authenticated = false;
  pollingCount = 0;
  @Get('/')
  @Render('pages/index.hbs')
  root() {
    return { layout: true, authenticated: this.authenticated };
  }

  @Get('/about')
  @Render('pages/about.hbs')
  aboutPage() {
    return { layout: true, authenticated: this.authenticated };
  }

  @Get('/polling')
  @Render('pages/polling.hbs')
  pollingPage() {
    return {layout: true, authenticated: this.authenticated};
  }
  
  @Get('api/messages')
  @Render('about.hbs')
  message() {
    return {authenticated: this.authenticated};
  }

  @Get('api/polling')
  @Render('api/polling.hbs')
  apiPolling(@Res() res) {
    this.pollingCount++;
    if (this.pollingCount > 10) {
      // HTTP response code 286 and the element will cancel the polling - HTMX docs
      res.status(286);
      this.pollingCount = 0;
    }
    const date = new Date().toUTCString();
    return {dateTime: date, authenticated: this.authenticated, pollingPercent: this.pollingCount * 10};
  }

  @Get('api/auth')
  @Redirect('/')
  auth() {
    this.authenticated = !this.authenticated;
    // redirect headers
    console.log({authenticated: this.authenticated});
    console.log('redirecting');
    return null;
  }
}
