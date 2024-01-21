### Demo NestJS app with HTMX

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


