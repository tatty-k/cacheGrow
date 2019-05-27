let User = require('../models/user');
let Goal = require('../models/goal')

module.exports = {
    show
}

function show(req, res){
    //not sure if .id needs to be here
    User.findById(req.user.id)
    .populate('goals').exec(function(err, user) {
        console.log(`user: ${user}`);
        console.log(user.goals);
        console.log(user.goals.savingsPurpose);
        res.render('users/show', {
            name: req.query.name,
            user: req.user,
            user

            //not storing in db?
            // email: req.query.email
        });
    });
}