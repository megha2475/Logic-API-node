function largestDigit(n){
    let digit,maxValue = 0;

    while(n!=0){
        digit = n%10;

        if(digit>maxValue){
            maxValue = digit;
        }

        n = Math.floor(n/10);
    }
    return maxValue;

};

module.exports = largestDigit;