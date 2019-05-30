let User = require('../models/user');
let Goal = require('../models/goal')

module.exports = {
    // index,
    show,
    create,
    update
}
// needed?
// function index(req, res){
//     res.render('index', {
//         user: req.user,
//         name: req.query.name
//     });
// }

function show(req, res){
    //not sure if .id needs to be here
    User.findById(req.user.id)
    .populate('goals').exec(function(err, user) {
        console.log(`user: ${user}`);
        // Goal.findPercentComplete(user)
        res.render('users/show', {
            name: req.query.name,
            user,
            // percent
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
    console.log(req.body);
    Goal.update({_id: req.body.id}, req.body)
    .exec(function(err, goal){
        if (err){
            console.log(err);
        } 
        console.log(goal);
        res.redirect('/users');
    });       
}
