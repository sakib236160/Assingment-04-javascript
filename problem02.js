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
console.log(sendNotification('zihad.ph@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));