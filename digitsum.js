function digitSum(n){
    let digit,sum = 0;

    while(n!=0){
        digit = n%10;
        sum = sum + digit;
        n = (n-digit)/10;
    }
    return sum;
}

module.exports = digitSum;