// function waitingTime(array, serialNumber) {
//     if (!Array.isArray(array) || typeof serialNumber !== "number") {
//         return "Invalid Input";
//     }
//     let totalTime = 0;
//     for (let time of array) {
//         totalTime += time;
//     }
//     let averageTime = Math.round(totalTime / array.length);
//     let remainingPeople = serialNumber - array.length - 1;
//     return remainingPeople > 0 ? remainingPeople * averageTime : 0;
// }
// console.log(waitingTime([3, 5, 7, 11, 6], 10)); 
// console.log(waitingTime([13, 2], 6)); 
// console.log(waitingTime([13, 2, 6, 7, 10], 6)); 
// console.log(waitingTime(7, 10)); 
// console.log(waitingTime("[6,2]", 9)); 
// console.log(waitingTime([7, 8, 3, 4, 5], " 9")); 


function waitingTime(waitingTimes , serialNumber) {
    if (!Array.isArray(waitingTimes )){
        return "Invalid Input";
    }else if((typeof serialNumber !== "number")){
        return "Invalid Input";
    }

    let totalTime = 0;
    for (let time of waitingTimes ) {
        totalTime = totalTime + time;
    }

    let averageTime = Math.round(totalTime / waitingTimes.length);
    let remainingMen = serialNumber - waitingTimes.length - 1;
    
    if (remainingMen > 0) {
        const averageTimeMultiRemainingMen = remainingMen * averageTime;
        return averageTimeMultiRemainingMen;
    } else {
        return 0;
    }
}
console.log(waitingTime([3, 5, 7, 11, 6], 10)); 
console.log(waitingTime([13, 2], 6)); 
console.log(waitingTime([13, 2, 6, 7, 10], 6)); 
console.log(waitingTime(7, 10)); 
console.log(waitingTime("[6,2]", 9)); 
console.log(waitingTime([7, 8, 3, 4, 5], " 9"));