const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');
const TaskTwo = mongoose.model('TasksTwo');

exports.getOrdersList = function(req, res) {

    //How to Join Drinks and Orders Collection ?
    TaskTwo
    .find({})
    .exec(function (err, result) { 
    //    console.log('The Drinks List is', result);
        if(err){
            res.send(err);
        }
        else{
            res.json(result);
        }
    });
    
 }
//  exports.getOrdersListcom = function(req, res) {

//     //How to Join Tasks and TasksTwo Collection 
//     Task
//     .find({})
//     .populate('TaskTwo')
//     .exec(Task.findById(req.params.taskId, function(err, task) {
//         if(err){
//             res.send(err);
//         }
//         else{
//             res.json(task);
//         }
//     }));
    
//  }

    // exports.getOrdersListcom = function(req, res) {
    //    db.Task.aggregate({
    //         $lookup:
    //             {
    //                 from: "TaskTwo",
    //                 localField: "item",
    //                 foreignField : "_id",
    //                 as: "TasksTwo"
    //             }
    //         }), function(err, task) {
    //         if(err){
    //             res.send(err);
    //         }
    //         else{
    //             res.json(task);
    //         }
    //     };
    //   };



 