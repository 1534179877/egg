'use strict'

module.exports = app => {
    const { mongoose }= app;
    const { Schema } = mongoose;
    const UserSchema = new Schema({
        userName:String,
        password:String
    });
    return mongoose.model('User',UserSchema,'user')
}