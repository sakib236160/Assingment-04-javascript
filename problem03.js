// function checkDigitsInName(name) {
//     if (typeof str !== 'string'){
//         return "Invalid Input";
//     }

//     for(let i = 0; i<name.length; i++){
//         if(name[i] >= '0' && name[i] <= '9'){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(checkDigitsInName("Raj123"));
// console.log(checkDigitsInName("n9ayeem"));
// console.log(checkDigitsInName("e1mu3"));
// console.log(checkDigitsInName("Suman"));
// console.log(checkDigitsInName("Name2024"));
// console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName(["Raj"]));



function checkDigitsInName(name) {
    if (typeof name !== 'string'){
        return "Invalid Input";
    }
    for(const nam of name){
        if(nam >= '0' && nam <= '9'){
            return true;
        }
    }
    return false;
}
console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("n9ayeem"));
console.log(checkDigitsInName("e1mu3"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));


// function checkDigitsInName(name) {
//     if (typeof name !== 'string') { 
//         return "Invalid Input";
//     }
//     let i = 0; 
//     while (i < name.length) { 
//         if (name[i] >= '0' && name[i] <= '9') { 
//             return true;
//         }
//         i++; 
//     }
//     return false; 
// }
// console.log(checkDigitsInName("Raj123"));
// console.log(checkDigitsInName("n9ayeem"));
// console.log(checkDigitsInName("e1mu3"));
// console.log(checkDigitsInName("Suman"));
// console.log(checkDigitsInName("Name2024"));
// console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName(["Raj"]));

