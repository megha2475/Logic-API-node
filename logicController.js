const factorial = require('../model/fatorial');
const isPrime = require('../model/isPrime');
const fibbinoci = require('../model/fibbinoci');
const reverse = require('../model/reverse');
const digitSum = require('../model/digitsum');
const largestDigit = require('../model/largestDigit');
const secondlargedigit = require('../model/secondLargestDigit');
const amstrong = require('../model/amstrong');
const count = require('../model/even-odd-count');

exports.check = (req,res)=>{
    console.log('comes to controller');
    const num = parseInt(req.params.num);
    const result = isPrime(num);

    res.json({number:num,isPrime:result});
};

exports.checkFactorial = (req,res)=>{
    const num = parseInt(req.params.num);
    const result = factorial(num);

    res.json({number:num,factorial:result});
};

exports.checkFibbinoci = (req,res)=>{
    const num = parseInt(req.params.num);
    const result = fibbinoci(num);

    res.json({number:num,fibbinoci:result});
};

exports.checkReverse = (req,res)=>{
    console.log('come to controller');
    const num = parseInt(req.params.num);
    const result = reverse(num);

    res.json({number:num,reverse:result});
};


exports.checkDigitSum = (req,res)=>{
    const num = parseInt(req.params.num);
    const result = digitSum(num);

    res.json({number:num,digitSum:result});
};


exports.checkLargedigit = (req,res)=>{
    console.log('come to controller');
    const num = parseInt(req.params.num);
    const result = largestDigit(num);

    res.json({number:num,largestDigit:result});
};

exports.checkSecondlargedigit = (req,res)=>{
    const num = parseInt(req.params.num);
    const result = secondlargedigit(num);

    res.json({number:num,secondlargedigit:result});
};

exports.checkAmstrong = (req,res)=>{
    const num = parseInt(req.params.num);
    const result = amstrong(num);

    res.json({number:num,amstrong:result});
};

exports.checkCount = (req,res)=>{
    const num = parseInt(req.params.num);
    const result = count(num);

    res.json({number:num,count:result});
};