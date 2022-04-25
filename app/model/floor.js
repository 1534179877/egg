'use strict'

module.exports = app => {
    const { mongoose }= app;
    const { Schema } = mongoose;
    const FloorSchema = new Schema({
        //_id: mongoose.ObjectId,
        floor_title:{
            name:String,
            image_src:String
        },
        product_list:Array
    });
    return mongoose.model('floor',FloorSchema,'floor')
}