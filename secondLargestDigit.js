function secondlargedigit(n){
    let digit,largest = 0,secondLargest;

    while(n!=0){
        digit = n%10;
        if(digit>largest){
            secondLargest = largest;
            largest = digit
        }else if(largest != secondLargest && digit>secondLargest){
            secondLargest = digit;
        }
        n = (n-digit)/10;
    }
    return secondLargest;
}

module.exports = secondlargedigit;