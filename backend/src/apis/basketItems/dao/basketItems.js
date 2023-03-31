const basketItem = require('../models/basketItem');
const basketitemmapping = require('../models/basketitemmapping');
const illness = require('../../diseases/models/illness');

async function getBasketItems(illnessId, ageGroup) {
	try {
        const illnessBasketItem = await basketitemmapping.findAll({
            attributes: ["basket_items.item_name", "basket_items.item_id"],
            include: [
                {  
                    attributes:["item_name", "item_id"],
                    model: basketItem, where: {
                        age_group: ageGroup
                    },
                    as:"basket_items"
                }, {
                    attributes: [],
                    model: illness, where: {
                        id: illnessId
                    },
                    as:"illness"
                }
            ],

        });
		return illnessBasketItem;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	getBasketItems
}