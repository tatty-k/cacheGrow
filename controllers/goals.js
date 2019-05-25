let Goal = require('../models/goal');

module.exports = {
    new: newGoal,
    create
}

function newGoal(req, res){
    res.render('goals/new', {
        user: req.user
    });
}

//this function dosen't store data in the db unless the
//inline function is in the create funciton. Why? 
//"goal" parameter returns user input
function create(req, res){
    Goal.create(req.body, function(err, goal){
        console.log(req.body);
        console.log(`User goal input: ${goal}`);
        res.redirect('/users');
    })       
}

{/* <p>
<select>
    <% goals.forEach(function(g) { %>
    <option><%= g.savingsPurpose %></option>
    <% }) %>
</select>
</p> */}

