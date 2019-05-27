let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true 
    },
    // email: {
    //     type: String,
    //     required: true,
        //ensures that users can't sign up twice
        // unique: true
    // },
    //connection to goal -- set up ok??
    goals:[{ type: Schema.Types.ObjectId, ref: 'Goal'}]
})

module.exports = mongoose.model('User', userSchema);
