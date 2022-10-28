let sum = 0;
function sumMix(arr) {
    for(let i = 0; i < arr.length; i++){
        let num = Number(arr[i]);
        sum += num
    }
       return sum
 }

  module.exports = sumMix