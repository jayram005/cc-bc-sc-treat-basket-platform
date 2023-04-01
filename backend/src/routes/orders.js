const router = require('express').Router()
const order = require('../apis/orders/api/order');
const {contentTypeJSON, reponseData} = require('../common/common');

router.post('/order', placeOrder);
router.get('/order/count', orderCount);

async function placeOrder(req, res) {
    try {
        const createOrder = await order.order(req, res);
        return reponseData(res, 200, contentTypeJSON, createOrder);
    } catch (error) {
        console.log(error);
    }
}

async function orderCount(req, res) {
    try {
        const createOrder = await order.orderCount(req, res);
        return reponseData(res, 200, contentTypeJSON, createOrder);
    } catch (error) {
        console.log(error);
    }
}

module.exports = router;