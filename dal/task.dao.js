const tasks = require('./index').db('koa').collection('tasks');

const ObjectId = require('mongodb').ObjectId;

const save = async ({title, description, date, priority, status,comment}) => {
    const result = await tasks.insertOne({title, description, date, priority, status,comment});
    return result.ops[0];
}

const getAll = async () =>{
    const cursor = await tasks.find();

    return cursor.toArray();
}

module.exports = {save, getAll};
