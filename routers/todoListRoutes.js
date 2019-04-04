module.exports = function(app){
    var todoList = require('../controllers/todoListController')
    var todoListTwo = require('../controllers/todoListTwoController')
    var show = require('../controllers/ShowData')
    require('uuid')

   app.route('/tasks')
    //.get(todoList.list_all_task)
   .post(todoList.create_a_task)

    app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

    app.route('/TasksTwo')
     .post(todoListTwo.create_a_task);
      

    app.route('/Show')
    .get(show.getOrdersList)

    app.route('/Showq')
    .get(show.getOrdersListcom)
};