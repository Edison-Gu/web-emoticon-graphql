'use strict';

module.exports = app => {
  // 引入建立连接的mongoose
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 数据库表的映射
  const UserSchema = new Schema({
    imgList: { type: Array },
    type: { type: Number },
    status: {
      type: Number,
      default: 1,
    },
  });
  return mongoose.model('web_demo', UserSchema, 'web_demo');
};
