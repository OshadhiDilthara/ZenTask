const Router = require('@koa/router');

const {createTask, getTasks} = require('../api/tasks.api');

const router = new Router({
    prefix: '/tasks'
})

router.get('/',async ctx =>{
    ctx.body = await getTasks();
})

router.post('/',async ctx=>{
    let task = ctx.request.body;
    task = await createTask(task);

    ctx.response.status=200;
    ctx.body=task;
})

module.exports = router;