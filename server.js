// import dependencies
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const Router = require('koa-router');
const koaStatic = require('koa-static');
const koaTemplate = require('./middleware/koa-template');

// setup the koa app
const app = new Koa();
var PORT = process.env.PORT || 8080;

// require models for syncing
var db = require("./models");

// configure middleware
app.use(bodyParser())
app.use(koaStatic('public'))
app.use(koaTemplate('main'))


// setup handlebars
app.use(views(`${__dirname}/views`, 
	{ extension: 'handlebars'}, 
	{ map: { handlebars: 'handlebars' } }
))

// routes
const apiRouter = require("./routes/api-routes.js");
const viewRouter = require("./routes/view-routes.js");

app.use(apiRouter.routes()).use(apiRouter.allowedMethods());
app.use(viewRouter.routes()).use(viewRouter.allowedMethods());
// start the server
db.sequelize.sync({ force: true }).then(function () {
	app.listen(PORT, function () {
		console.log("App listening at http://localhost:" + PORT);
	});
});
