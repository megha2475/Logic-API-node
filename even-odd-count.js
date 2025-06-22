function count(n){
    let oddCount = 0,evenCount = 0,digit;

    while(n!=0){
        digit = n%10;
        
        if(digit%2==0){
            evenCount++;
        }else{
            oddCount++;
        }
        n = (n-digit)/10;
    }
    return {
        even : evenCount,
        odd : oddCount
    }
};

module.exports = count;