/*************************     step 01      ******************************/ 
// function calculateTax(income, expenses) {

//     if (!(0<=income  && 0<=expenses && income >=expenses)) {
//         return "Invalid Input";
//     }


//     const totalIncomeAndExpenses = income - expenses;
//     const taxRate20 = 0.20;
//     const totalTax = totalIncomeAndExpenses * taxRate20;
//     return totalTax;
// }
// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));





/*************************     step 02      ******************************/ 
/*
function calculateTax(income, expenses) {

    if (!(0<=income)) {
        return "Invalid Input";
    }
    if (!(0<=expenses)) {
        return "Invalid Input";
    }
    if (!(income >=expenses)) {
        return "Invalid Input";
    }
    

    const totalIncomeAndExpenses = income - expenses;
    const taxRate20 = 0.20;
    const totalTax = totalIncomeAndExpenses * taxRate20;
    return totalTax;
}
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));
*/




/*************************     step 03      ******************************/ 
function calculateTax(income, expenses) {

    if (!(0<=income)) {
        return "Invalid Input";
    } else if (!(0<=expenses)) {
        return "Invalid Input";
    } else if (!(income >=expenses)) {
        return "Invalid Input";
    }    
    
    const totalIncomeAndExpenses = income - expenses;
    const taxRate20 = 0.20;
    const totalTax = totalIncomeAndExpenses * taxRate20;
    return totalTax;
}
console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));





/*************************     step 04      ******************************/ 
// function calculateTax(income, expenses) {

//     if (!(0<=income)  || !(0<=expenses) || !(income >=expenses)){
//         return "Invalid Input";
//     }    
    
//     const totalIncomeAndExpenses = income - expenses;
//     const taxRate20 = 0.20;
//     const totalTax = totalIncomeAndExpenses * taxRate20;
//     return totalTax;
// }
// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));