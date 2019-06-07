module.exports = {
    getPercent
}

function getPercent(goal){

    const totalSavings = goal.progress.reduce(function(preVal, curVal){
       return parseInt(preVal) + parseInt(curVal.savingAmount);
   }, 0)
   const percent = (totalSavings/parseInt(goal.goal))*100;
   
   return Math.floor(percent);
   }


   