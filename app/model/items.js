'use strict'

module.exports = app => {
    const { mongoose }= app;
    const { Schema } = mongoose;
    const ItemsSchema = new Schema({
        goods_id:Number,
        goods_name:String,
        cat_id:Number,  //
        goods_price: Number,
        goods_weight: Number,
        goods_big_logo:String,
        goods_small_logo:String,
        add_time:Number,
        upd_time:Number,
        hot_mumber:Number,
        is_promote:Boolean,
        cat_one_id:Number,
        cat_two_id:Number,
        cat_three_id:Number

    });
    return mongoose.model('Items',ItemsSchema,'zg')
}