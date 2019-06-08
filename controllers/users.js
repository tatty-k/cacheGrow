let User = require('../models/user');
const { Goal } = require('../models/goal');
let Helpers = require('../helpers/helpers');

module.exports = {
    show,
    create,
    update
}

function show(req, res){
    //not sure if .id needs to be here
    User.findById(req.user.id)
    .populate('goals').exec(function(err, user) {
        console.log(`user: ${user}`);
        // Goal.findPercentComplete(user)
        res.render('users/show', {
            name: req.query.name,
            user,
            //not storing in db?
            // email: req.query.email
        });
    });
}

function create(req, res){
    //push into goal??
    Goal.progress.push(req.body)
}

function update(req, res){
    Goal.findByIdAndUpdate(
        //
        req.body.id, 
        req.body, 
        // tells the funciton to return the updated goal
        { new: true },
        function(err, goal) {
            if (err){
                console.log("err", err);
            } 
            goal.percentToComplete = Helpers.getPercent(goal);
            console.log("goal1", goal);
            goal.save(function(err){
                console.log("goal2", goal);
                res.redirect('/users');
            });
    });       
}
