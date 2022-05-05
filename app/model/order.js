'use strict'

module.exports = app => {
    const { mongoose }= app;
    const { Schema } = mongoose;
    const OrdersSchema = new Schema({
        //_id: mongoose.ObjectId,
        order_id:Number,  //
        order_time:String,  //
        order_price:Number,
        person:String,
        address:String,
        phone:Number,
        order_type:Boolean
    });
    return mongoose.model('Orders',OrdersSchema,'order')
}