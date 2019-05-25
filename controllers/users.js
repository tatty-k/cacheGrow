let User = require('../models/user');
let Goal = require('../models/goal')

module.exports = {
    show
}

//goal array isn't getting populated
function show(req, res){
    User.findById(req.user.id)
    .populate('goal').exec(function(err, user) {
        console.log(`user: ${user}`);
        console.log(`user goal: ${user.goal[0]}`);
        res.render('users/show', {
            name: req.query.name,
            user: req.user
        });
    });
}