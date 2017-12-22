const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const render = require('koa-swig');
const co = require('co');
const serve = require('koa-static');
const app = new koa();

const router = require('./router/router');

var port = process.env.PORT || 3000;

app.context.render = co.wrap(render({
    root: path.join(__dirname, '/client/views'), //连成需要的路径
    cache: false,
    ext: 'html',
    writeBody: false
}));

app.use(serve(__dirname + '/public'));

app.use(router);

app.listen(port);

console.log(`server started at http://localhost:${port}`);