let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    googleId: String,
    //connection to goal -- set up ok??
    goal:[{ type: Schema.Types.ObjectId, ref: 'Goal'}]
})

module.exports = mongoose.model('User', userSchema)
