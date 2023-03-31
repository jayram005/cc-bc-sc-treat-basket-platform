const orderDao = require('../dao/order');
const errorhandle = require('../../../config/dberrorHandle');
const database = require('../../../config/database');
const basketItems = require('../../basketItems/dao/basketItems');
const illness = require('../../diseases/dao/illness');
const moment = require('moment');
const Joi = require('joi');

function orderPayload(body) {
	const payload = {
		name: body.name,
		gender: body.gender,
		weight: body.weight,
		date_of_birth: body.dateOfBirth,
		guardian_name: body.guardianName,
		relation: body.relation,
		type_of_illness: body.typeOfIllness,
		illness_since: body.illnessSince,
		symptoms: body.symptoms,
		allergies: body.allergies,
		medication: body.medication,
		phone_number: body.phoneNo,
		email: body.email,
		delivery_address: body.deliveryAddress,
		deivery_date: body.deliveryDate,
		latitude: body.latitude,
		logitude: body.logitude,
		city: body.city,
		state: body.state,
		postcode: body.postCode
	};
	return payload;
}

const addNewOrder = async function addNewOrder(body, res) {
    try {
		validateRequest(body, res);
        const orderPayloadData = orderPayload(body);
		const getPreviousOrder = await orderDao.getOrderDetails(body.name, body.dateOfBirth, body.phoneNo);
		if(getPreviousOrder && getPreviousOrder.length > 0){
			const errorMsg = "Order already placed by same child";
			throw res.status(409).json({ status: 409, type: "error", message: errorMsg });
		}
		const illnessId = await illness.getIllnessByName(body.typeOfIllness);

		if(illnessId && illnessId.id === "undefined" && basketItemsData.length === 0){
			const errorMsg = "Illness doesn't elegible for Treat Basket";
			throw res.status(400).json({ status: 400, type: "error", message: errorMsg });
		}
		const dateOfBirth = body.dateOfBirth;
		const birthDate = moment(dateOfBirth);
		const age = moment().diff(birthDate, 'years');

		const ageGroup = checkNumberRange(age);
		const basketItemsData = await basketItems.getBasketItems(illnessId.id, ageGroup);
		console.log(JSON.stringify(basketItemsData));
		if(basketItemsData.length === 0){
			const errorMsg = "Illness doesn't elegible for Treat Basket";
			throw res.status(400).json({ status: 400, type: "error", message: errorMsg });
		}
		let orderData = {};
		await database.config.transaction(async (t) => {
            orderData = await orderDao.placeOrder(orderPayloadData, t);
			console.log(JSON.stringify(orderData));
			let allbasketItems = [];
			let basketItemsInfo = [];
            basketItemsData.map(basketItemData => {
				allbasketItems.push({order_id: orderData.id, item_id: basketItemData.basket_items.item_id});
				basketItemsInfo.push(basketItemData.basket_items.item_name);
			});
			console.log(`data ${JSON.stringify(allbasketItems)}`);
			await orderDao.addOrderItems(allbasketItems, t); 
			orderData = {
				...orderData.dataValues,
				basketItems: basketItemsInfo
			};
        });
        return orderData;
    } catch (e) {
		console.log(e);
        console.log(JSON.stringify({event: 'order', method: 'addNewOrder', error: e.stack}));
        const errorResponse = errorhandle.handleDbError(e);
        return errorResponse;
    }
};

function checkNumberRange(number) {
	switch (true) {
	  case (number >= 1 && number <= 5):
		return "0-5";
	  case (number >= 6 && number <= 10):
		return "6-10";
	  case (number > 11):
		return "11-16";
	  default:
		console.log("Age not valid");
		break;
	}
}

function validateRequest(body, res){
    const schema = Joi.object({
        name: Joi.string().min(1).max(25).required(),
        gender: Joi.string().valid("Male","Female","Other").required(),
        weight:Joi.string().min(1).max(7).optional(),
        dateOfBirth:Joi.date().required(),
        guardianName: Joi.string().min(1).max(25).required(),
        relation:Joi.string().valid('Father', 'Mother','Other').required(),
        typeOfIllness:Joi.string().min(1).max(25).required(),
        illnessSince:Joi.date().required(),
        phoneNo: Joi.string().max(12).required(),
        email: Joi.string().email().required(),
        deliveryAddress:Joi.string().required(),
        deliveryDate:Joi.date().required(),
        latitude:Joi.string().required(),
        logitude:Joi.string().required(),
        city:Joi.string().required(),
        state:Joi.string().max(25).required(),
        postCode:Joi.string().max(7).required()
    }).unknown();
	const { error } = schema.validate(body);
	if (error) {
        const errorMessage = error.details[0].message;
        throw res.status(400).json({ status: 400, type: "error", message: errorMessage, data: [] });
    }
}
module.exports = {
    addNewOrder
}