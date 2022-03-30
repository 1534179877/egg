'use strict';

/*
* @followType :
*  0 未关注  ;1 A关注B ; 2 B关注A ;3互关
* */
module.exports = app =>{
    const { mongoose }= app;
    const { Schema , ObjectId } = mongoose;
    const followSchema = new Schema({
        //_id: mongoose.ObjectId,
        UserAId:{
            type:ObjectId,
        },
        UserBId:{
            type: ObjectId
        },
        followType:{
            type: Number
        }
    });
    return mongoose.model('Follow',followSchema,'follow');
}