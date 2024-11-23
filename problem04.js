const person1 = {
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true,
};
const person2 = {
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: false,
}
const person3 = {
    name: "Rajib",
    testScore: 15,
    schoolGrade: 25,
    isFFamily: true,
}

function calculateFinalScore(obj) {
    if (typeof obj !== "object") {
        return "Invalid Input";
    }

    let FinalScore = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {
        FinalScore = FinalScore + (FinalScore * 0.2);
    }
    if (FinalScore >= 80) {
        return true;
    } else {
        return false;
    }
}

console.log(calculateFinalScore(person1));
console.log(calculateFinalScore(person2));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore(person3));


