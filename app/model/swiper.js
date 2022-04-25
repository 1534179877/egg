'use strict'

module.exports = app => {
    const { mongoose }= app;
    const { Schema } = mongoose;
    const SwiperSchema = new Schema({
        //_id: mongoose.ObjectId,
        goods_id:Number,  //
        navigator_url:String,  //
        image_src: {     //url
            type:String,
            default :''
        },
        open_type:{     // opentype
            type: String,
            default :"navigate"
        }

    });
    return mongoose.model('Swiper',SwiperSchema,'swiper')
}