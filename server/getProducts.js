const products = require('../products.json')

const getProducts = (req, res, next) => {
  if (req.query.price) {
    const result = products.filter(product => Number.parseFloat(req.query.price) <= product.price ? true : false);
    res.status(200).send(result);
  } else {
    res.status(500).send(products);
  }
}
module.exports = getProducts;