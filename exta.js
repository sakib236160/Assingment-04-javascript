// function waitingTime(array, serialNumber) {
    
//     if(!Array.isArray(array)){
//         return "Invalid Input"
//     }
//     if(typeof(serialNumber) != 'number'){
//         return "Invalid Input"
//     }
    
//     return Math.round(array.reduce((acc, curr) => acc + curr)/array.length)* (serialNumber - (array.length+1));
// }
// console.log(waitingTime([3, 5, 7, 11, 6], 10)); 
// console.log(waitingTime([13, 2], 6)); 
// console.log(waitingTime([13, 2, 6, 7, 10], 6)); 
// console.log(waitingTime(7, 10)); 
// console.log(waitingTime("[6,2]", 9)); 
// console.log(waitingTime([7, 8, 3, 4, 5], " 9"));



// function calculateTax(income, expenses){
//     if(!(0<=income && 0<=expenses && income>=expenses){
//         return "Invalid Input"
//     }
//     const net_income = income - expenses;
//     const tex = net_income * 0.2;
//     return tex;
// }
// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));



function calculateTax(income, expenses) {
        if (!(0<=income  && 0<=expenses && income >=expenses)) {
            return "Invalid Input";
        }
        const net_income = income - expenses;
        const tex = net_income * 0.2;
        return tex;
    }
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));
    

