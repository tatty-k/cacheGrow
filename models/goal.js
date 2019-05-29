let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let savingsSchema = new Schema({
    savingAmount: {
        type: Number,
        required: true
    }

})

let goalSchema = new Schema({
    goal: {
        type: Number,
        required: true
    },
    savingsPurpose: {
        type: String,
        required: true
    },
    isGroup: Boolean,
    progress: [savingsSchema],
    percentToComplete: {
        type: Number,
        default: 0
    }
})

goalSchema.methods.findPercentComplete = function(user) {
    user.goals.forEach(function(goal) {
        const totalSavings = goal.progress.reduce(function(preVal, curVal){
            return parseInt(preVal) + parseInt(curVal.savingAmount);
        }, 0)
        const percent = (totalSavings/parseInt(goal.goal))*100;
        //this needs to be moved into controllers when I edit and delete goals 
        goal.percentToComplete = percent
        goal.save()
    })
    return 0
}

module.exports = mongoose.model('Goal', goalSchema);
    
