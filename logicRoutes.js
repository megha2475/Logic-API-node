const express = require('express');
const router = express.Router();
const logicController = require('../controller/logicController');

router.get('/isPrime/:num',logicController.check);
router.get('/factorial/:num',logicController.checkFactorial);
router.get('/fibbinoci/:num',logicController.checkFibbinoci);
router.get('/reverse/:num',logicController.checkReverse);
router.get('/digitSum/:num',logicController.checkDigitSum);
router.get('/largestDigit/:num',logicController.checkLargedigit);
router.get('/secondLargedigit/:num',logicController.checkSecondlargedigit);
router.get('/amstrong/:num',logicController.checkAmstrong);
router.get('/count/:num',logicController.checkCount);

module.exports = router;