const {save, getAll, getById, removeById, updateById}= require('../dal/task.dao');

const createTask = async ({title, description, date, priority, status,comment}) =>{
    const task = {
        title,
        description,
        date,
        priority,
        status,
        comment
    }
    return await save(task);
}

const getTasks = async()=>{
    return await getAll();
}

const getTaskById = async id =>{
    return await getById(id);
}

const removeTaskById = async id =>{
    return await removeById(id);
}

const updateTaskById = async (id,{title, description, date, priority, status,comment} )=>{
    return await updateById(id, {title, description, date, priority, status,comment});
}
 
module.exports = {
    createTask,
    getTasks,
    getTaskById,
    removeTaskById,
    updateTaskById
}