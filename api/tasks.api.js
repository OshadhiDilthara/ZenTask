const {save, getAll, getById}= require('../dal/task.dao');

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
 
module.exports = {
    createTask,
    getTasks,
    getTaskById
}