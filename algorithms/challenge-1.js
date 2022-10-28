let numArray = [];
function countTruthy(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0 || arr[i] === "" || arr[i] === undefined || arr[i] === null || arr[i] === NaN){
           continue
       } else {
            numArray.push(arr[i])
       }
          }
          return numArray.length
}
module.exports = countTruthy


