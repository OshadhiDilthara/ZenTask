const Router = require('@koa/router');

const {createTask, getTasks, getTaskById, removeTaskById} = require('../api/tasks.api');

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

router.get('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await getTaskById(id);
})

router.delete('/:id', async ctx =>{
    const id = ctx.params.id;
    await removeTaskById(id);
})

module.exports = router;