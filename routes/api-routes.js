// require our models
var db = require("../models");
const Router = require('koa-router');

const router = new Router();


// @route: GET /api
// @desc:  Return all blog posts
router.get("/api", async (ctx) => {
	const result = await db.Post.findAll({})
	
	ctx.body = result;
});

// @route: POST /api
// @desc:  Create a new blog post
router.post("/api", async (ctx) => {
	// destructure request
	const { title, body } = ctx.request.body;
	
	// create payload
	if (title && body) {
		
		const payload = { title, body };
		
		const result = await db.Post.create(payload)
		ctx.body = result
		
	} else {
		ctx. body = {
			status: "failed",
			reason: "body or title was empty"
		}
	}
});

module.exports = router;
