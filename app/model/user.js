'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    //_id: mongoose.ObjectId,
    userName:String,
    passWord:String
  });
  return mongoose.model('User',UserSchema,'Users')
}
