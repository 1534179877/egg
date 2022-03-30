'use strict' ;

module.exports = app => {
  const { mongoose }= app;
  const { Schema } = mongoose;
  const UserSchema = new Schema({
    //_id: mongoose.ObjectId,
    userName:String,  //名字
    passWord:String,  //密码
    telePhone: {     //手机号
      type:String,
      default :''
    },
    follow_count:{     // 粉丝人数
      type: Number,
      default :0
    },
    following_count:{  //关注人数
      type: Number,
      default :0
  }

  });
  return mongoose.model('User',UserSchema,'Users')
}
