const products = require('../products.json')

const getProduct = (req,res,next)=> {
  
  let product = products.filter(product=> product.id===Number.parseInt(req.params.id) ? true:false);
  if (product[0]) {
    res.status(200).send(product[0])
  } else {
    res.status(500).send('Item is not in list')
  }
  
  
}
module.exports = getProduct; 