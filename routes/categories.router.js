const express = require('express');
const router = express.Router();
const CategoriesService = require('../services/categories.service');
const service = new CategoriesService();

router.get('/', (req, res) => {
  res.json(service.getCategories());
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId
  });
});

module.exports = router;
