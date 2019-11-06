const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orderSchema = new Schema({
    item: {
        type: String
    },
    price: {
        type: String
    },
    quantity: {
        type: String
    },
}, {
        collection: 'orders'
})
module.exports = mongoose.model('OrderSchema', orderSchema)