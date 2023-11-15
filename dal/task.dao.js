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

const getById = async(id) =>{
    return await tasks.findOne({_id: new ObjectId(id)});
}

const removeById = async(id) =>{
    return await tasks.deleteOne({_id: new ObjectId(id)});
}

const updateById = async(id,{title, description, date, priority, status,comment})=>{
    return await tasks.replaceOne({_id: new ObjectId(id)}, {title, description, date, priority, status,comment});
}

module.exports = {save, getAll, getById, removeById, updateById};
