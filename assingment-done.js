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


function sendNotification(email) {

    if(email.indexOf("@") === -1){
        return "Invalid Email";
    }

    const emailDividedTwoParts = email.split('@');

    const userName = emailDividedTwoParts [0];
    const domainName = emailDividedTwoParts [1];
    const notificationMessage = userName + " sent you an email from " + domainName;

    return notificationMessage;
}


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