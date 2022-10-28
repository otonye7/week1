let sum = 0;
function calculateGrade(marks) {
    for(let i = 0; i < marks.length; i++){
         sum += marks[i]
    }
        let avg = sum / arr.length;
        if(avg >= 90 && avg <= 100){
            return "A"
        } else if (avg >= 80 && avg <= 89){
            return "B"
        } else if (avg >= 70 && avg <= 79){
            return "C"
        } else if (avg >= 60 && avg <= 69){
            return "D"
        } else if (avg >= 50 && avg <= 59){
            return "E"
        } else if (avg >= 1 && avg <= 49){
           return "F"
       } 
 }
  module.exports =calculateGrade
