const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    ctx.response.body = await ctx.render('index'); //渲染views/index.html
});

router.get('/detail', async (ctx, next) => {
    ctx.response.type = 'application/json';
    ctx.response.body = 'detail page';
});

module.exports = router.routes();