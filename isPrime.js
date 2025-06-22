
// function isPrime(n){
//     let flag = 0;

//     for(let i=2;i<=n/2;i++){
//         if(n%i==0){
//             flag = 1;
//             break;
//         }
//     }
//     if(flag == 0){
//         return true;
//     }else{
//         return false;
//     }
// }

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


module.exports = isPrime;