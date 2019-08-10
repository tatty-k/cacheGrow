let User = require('../models/user');
const { Goal } = require('../models/goal');
let Helpers = require('../helpers/helpers');

module.exports = {
    show,
    create,
    update
}

function show(req, res){
    User.findById(req.user.id)
    .populate('goals').exec(function(err, user) {
        res.render('users/show', {
            name: req.query.name,
            user,
        });
    });
}

function create(req, res){
    Goal.progress.push(req.body)
}

function update(req, res){
    Goal.findByIdAndUpdate(
        req.body.id, 
        req.body, 
        // tells the funciton to return the updated goal
        { new: true },
        function(err, goal) {
            if (err){
                console.log("err", err);
            } 
            goal.percentToComplete = Helpers.getPercent(goal);
            goal.save(function(err){
                res.redirect('/users');
            });
    });       
}
