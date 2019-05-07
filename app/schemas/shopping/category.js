'use strict';

import mongoose from 'mongoose';
import categoryData from '../../initData/category';

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  count: { type: Number },
  id: { type: Number },
  ids: { type: Array },
  image_url: { type: String },
  level: { type: Number },
  name: { type: String },
  sub_categories: [
    {
      count: { type: Number },
      id: { type: Number },
      image_url: { type: String },
      level: { type: Number },
      name: { type: String },
    }
  ]
});

categorySchema.statics.addCategory = async function(type) {
  const categoryName = type.split('/');
  console.log(categoryName);
  try {
    const allcate = await this.findOne();
    const subcate = await this.findOne({name: categoryName[0]});
    allcate.count ++;
    subcate.count ++;
    subcate.sub_categories.map(item => {
      if (item.name == categoryName[1]) {
        return item.count++;
      }
    })
    await allcate.save();
    await subcate.save();
    console.log('保存category成功');
    return
  } catch (err) {
    console.log('保存category失败');
    throw new Error(err);
  }
}

const Category = mongoose.model('Category', categorySchema);

// 添加初始化数据
Category.findOne((err, data) => {
  if (!data) {
    for (let i = 0; i < categoryData.length; i++) {
      Category.create(categoryData[i]);
    }
  }
})

export default Category