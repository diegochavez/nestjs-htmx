### Demo NestJS app with HTMX

After the amount of traction HTMX has been getting, I wanted to try it out in a real app. This is a demo app that uses HTMX to update the UI without a full page refresh.

Based on the MVC template 17 from NestJS samples.
Note that if you are running the Nest app on a remote machine, you may need to change the listen address, as per [these instructions](https://docs.nestjs.com/techniques/performance#adapter):

`await app.listen(3000, '0.0.0.0')`

## Project stack
- [x] NestJS
- [x] Fastify
- [x] HTMX

## Setup
We have views in `views` folder, and controllers in `controllers` folder. The `main.ts` file is the entry point for the app.

### Views
Views are written in HBS, and are rendered by the `hbs` package. The `hbs` package is configured in `main.ts`:


Based on the MVC template 17 from NestJS samples.
[nestjs-sample-17-mvc](https://github.com/nestjs/nest/tree/master/sample/17-mvc-fastify)
