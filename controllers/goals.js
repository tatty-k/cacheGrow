let Goal = require('../models/goal');

module.exports = {
    new: newGoal,
    create
}

function newGoal(req, res){
    res.render('goals/new', {
        user: req.user,
        // email: req.user.email,
    });
}

//this function dosen't store data in the db unless the
//inline function is in the create funciton. Why? 
function create(req, res){
    Goal.create(req.body, function(err, goal){
        req.user.goals.push(goal._id);
        req.user.save(function(err){
        console.log(goal._id);
        console.log(req.body)
        res.redirect('/users');
        });    
    })       
}


