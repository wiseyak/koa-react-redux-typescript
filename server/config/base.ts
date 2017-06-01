import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser';
import * as Serve from 'koa-static';
import * as mount from 'koa-mount';

export class BaseConfig {
    constructor() {}

    static config(app: Koa): void{
        //add Koa middlewares
        //including mounts to serve scripts and app artifacts
        app.use(bodyparser())
           .use(mount("/public", Serve(__dirname + '/../../public/')))
           .use(mount("/lib", Serve(__dirname + '/../../node_modules')));
    }
}