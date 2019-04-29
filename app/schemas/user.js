
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const UserSchema = new Schema({
  // 昵称
  nikename: String,
  // 最近一次重置昵称的时间
  nickname_reset_at: { type: Date, default: Date.now },
  // 创建日期
  create_at: { type: Date, default: Date.now },
  // 最近一次登录
  last_sign_at: { type: Date, default: Date.now },
  // 用户等级
  // 100 后台管理员
  role: { type: Number, default: 0 },
  // 头像
  avatar: { type: String, default: '' },
  // 性别 0女 \ 1男
  gender: { type: Number },
  // 简介,一句话介绍自己，70个字符限制
  brief: { type: String, default: '' },
  // 访问令牌
  access_token: { type: String },
  // 密码
  password: String
});

UserSchema.set('toJSON', { getters: true });

mongoose.model('User', UserSchema);