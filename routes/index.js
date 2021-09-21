const Router = require('express');
const router = new Router();

const gifCardRouter = require('./gifCardRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/gifcard', gifCardRouter);

module.exports = router;
