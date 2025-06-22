function reverse(n){
    let digit,rev = 0;

    while(n!=0){
        digit = n%10;
        rev = rev*10 + digit;
        n = (n-digit)/10;
    }
    return rev;
}

module.exports = reverse;