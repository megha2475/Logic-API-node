function fibbinoci(n){

    let initial = 0,previous = 1,fibbiNum,series = [];

    for(let i=0;i<n;i++){
        series.push(initial);

        fibbiNum = initial + previous;
        initial = previous;
        previous = fibbiNum;  
    }
    return series;

}

module.exports = fibbinoci;