let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true 
    },
    goals:[{ type: Schema.Types.ObjectId, ref: 'Goal'}]
})

module.exports = mongoose.model('User', userSchema);
