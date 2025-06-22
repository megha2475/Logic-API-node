function amstrong(n){
    let digit,amstrong = 0,temp = n;

    while(n!=0){
        digit = n%10;
        amstrong += (digit*digit*digit);
        n = n/10;
    }

    if(temp = amstrong){
        return true
    }else{
        return false
    };
};

module.exports = amstrong;