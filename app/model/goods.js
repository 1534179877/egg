'use strict'

module.exports = app => {
    const { mongoose }= app;
    const { Schema } = mongoose;
    const GoodsSchema = new Schema({
        //_id: mongoose.ObjectId,
        cat_id:Number,  //
        cat_name:String,  //
        cat_pid:Number,
        cat_level:Number,
        cat_icon:String,
        children:Array
    });
    return mongoose.model('Goods',GoodsSchema,'goods')
}