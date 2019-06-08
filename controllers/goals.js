let Helpers = require('../helpers/helpers');
//destucturing 
const { Goal, Saving } = require('../models/goal');

module.exports = {
    new: newGoal,
    create,
    deleteGoal,
    show,
    createSavings,
    edit,
    deleteSavings
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
        console.log()
        goal.percentToComplete = Helpers.getPercent(goal);

        goal.save(function(err){
            if (err) {
                console.log(err)
                res.redirect(`/users/goals/${goal._id}/savings/show`);
            }
            res.redirect(`/users/goals/${goal._id}/savings/show`);
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


function deleteSavings(req, res){
    //why dosen't this strategy work
    // Saving.findByIdAndRemove(req.params.s_id, function(err){
    //     console.log("delete", req.params.s_id);
    //     res.redirect('/users/goals/${goal.g_id}/savings/show');
    // });


    Goal.findById(req.params.g_id, function(err, goal){
        goal.progress.id(req.params.s_id).remove();
        goal.percentToComplete = Helpers.getPercent(goal);
        goal.save(function(err) {
            res.redirect(`/users/goals/${goal._id}/savings/show`)
        })        
    })
}
