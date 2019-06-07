let Goal = require('../models/goal');
let Helpers = require('../helpers/helpers');

module.exports = {
    new: newGoal,
    create,
    delete: deleteGoal,
    show,
    createSavings,
    edit
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
        });      
    });
}

function createSavings(req, res){
    
    Goal.findById(req.params.id, function(err, goal){
        goal.progress.push(req.body);

        goal.percentToComplete = Helpers.getPercent(goal);

        goal.save(function(err){
            if (err) {
                console.log(err)
                res.redirect(`/users/goals/${goal._id}/savings/new`);
            }
            res.redirect(`/users/goals/${goal._id}/savings/new`);
        });
    });
    
}

function edit(req, res){
    //do I need to define this varable and send it to the edit view? 
    Goal.findById(req.params.id, function(err, goal){


        res.render('goals/edit', {
            goal
        });
    });
}




