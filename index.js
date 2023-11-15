const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const taskRoutes = require('./routes/tasks.routes')

const app = new Koa();

app.use(bodyParser());

app.use(taskRoutes.routes()).use(taskRoutes.allowedMethods());

app.listen(3500);

console.log("Application is running on port 3500");