const express = require('express');
const app = express();
const orderRoute = express.Router();               //Express route
let OrderSchema = require('../model/order.model');  //Schema 

//Get Order
orderRoute.route('/').get((req, res) => {
    OrderSchema.find((err, data) => {
        if(err) throw err;
        res.json(data);
        console.log(data);
    })
})
//Get Single Order
orderRoute.route('/:id').get((req, res) => {
    OrderSchema.findById(req.params.id, (err, data) => {
        if(err) throw err;
        res.json(data);
        console.log(data);
    })
})
//Create Order
orderRoute.route('/').post((req, res) =>{
    OrderSchema.create(req.body, (err, data) => {
        if(err) throw err;
        res.json(data);
        console.log('Order created ' + data)
    })
})
//Update Order
orderRoute.route('/:id').put((req, res) => {
    OrderSchema.findByIdAndUpdate(req.params.id, {$set: req.body}, (err,data) => {
        if(err) throw err;
        res.json(data);
        console.log(data+ " Updated");
    })
})
//Delete Order
orderRoute.route('/:id').delete((req, res) => {
    OrderSchema.findByIdAndRemove(req.params.id, (err, data) => {
        if(err) throw err;
        res.status(200).json({
            msg: data
        })
        console.log(data + " Deleted")
    })
})

module.exports = orderRoute;