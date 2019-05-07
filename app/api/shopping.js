'use strict';

import express from 'express';
import Category from '../controller/shopping/category';

const router = express.Router();

router.get('/v2/restaurant/category', Category.getCategories);

export default router