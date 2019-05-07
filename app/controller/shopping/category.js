import CategoryModel from '../../schemas/shopping/category';

class Category {
  constructor() {
  }

  // 获取所有参观分类和数量
  async getCategories(req, res, next) {
    try {
      const categories = await CategoryModel.find({}, '-_id');
      res.send(categories);
    } catch (err) {
      console.log('获取categories失败');
      res.send({
        status: 0,
        type: 'ERROR_DATA',
        message: '获取categories失败'
      })
      
    }
  }
}

export default new Category();