import * as Koa from 'koa';
import {BaseConfig} from './config/base';
import router from './config/routes';

const app = new Koa();
const port = process.env.PORT  || 3000;

BaseConfig.config(app);

//configure routes
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(port, () => {
    console.log('listening on port', port);
});

export default app;