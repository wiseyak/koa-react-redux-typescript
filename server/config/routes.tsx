import * as Router from 'koa-router';
import * as React from 'react';
import {Html} from '../components/layout';
import {renderToStaticMarkup} from 'react-dom/server';

const router = new Router;

router.get('/', async(ctx, next) => {
    await next();
    let html = new Html();
    ctx.type = 'html';
    ctx.body = renderToStaticMarkup(html.render());
});

export default router;