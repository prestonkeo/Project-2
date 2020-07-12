const Router = require('koa-router');

const router = new Router();


// @route: GET /
// @desc:  Render index template
router.get("/", async (ctx) => {
	await ctx.render("index", ctx.data);
});

// @route: GET /posts
// @desc:  Return posts template
router.get("/posts", async (ctx) => {
	await ctx.render("posts", ctx.data);
});

module.exports = router;
