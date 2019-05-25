let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let savingsSchema = new Schema({
    amount: {
        type: Number,
        required: true
    }
})

let goalSchema = new Schema({
    goal: {
        type:Number,
        required: true
    },
    savingsPurpose: {
        type: String,
        required: true
    },
    isGroup: Boolean,
    //array of savings -- is this the right way to do this?
    // progress: [savingsSchema.amount]
})

module.exports = mongoose.model('Goal', goalSchema)
    
