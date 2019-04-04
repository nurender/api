const mongoose = require('mongoose');
const TaskTwo = mongoose.model('TasksTwo');

exports.create_a_task = function(req, res){
    // console.log("data post", req.body.name)
    var new_task = new TaskTwo(req.body);
    new_task.save(function(err, task){
        if(err){
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
};

exports.read_a_task = function(req, res) {
    TaskTwo.findById(req.params.taskId, function(err, task) {
        if(err){
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
};

exports.update_a_task = function(req, res){
    TaskTwo.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
        if(err){
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
};

exports.delete_a_task = function(req, res){
    TaskTwo.remove({
        _id: req.params.taskId
    }, function(err, task) {
        if (err)
          res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};