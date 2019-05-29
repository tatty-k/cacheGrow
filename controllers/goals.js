let User = require('../models/user');
let Goal = require('../models/goal');

module.exports = {
    new: newGoal,
    create,
    delete: deleteGoal,
    createSavings,
    show
}

function newGoal(req, res){
    res.render('goals/new', {
        user: req.user,
        // email: req.user.email,
    });
}

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

function deleteGoal(req, res){
    Goal.findByIdAndRemove(req.params.id, function(err){
        res.redirect('/users');
    });  
}

function show(req, res){
    Goal.findById(req.params.id, function(err, goal){
        res.render('goals/show', {
            goal
        })       
    });
}

function createSavings(req, res){
    console.log(req.body);
}

