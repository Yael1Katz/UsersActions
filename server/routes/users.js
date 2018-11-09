var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// productController.createProduct = (req, res) => {
//   addToDB(req, res);
// };

// async function addToDB(req, res) {
//   var product = new Product({
//       name: req.body.name,
//       category: req.body.category,
//       price: req.body.price,
//       image: req.body.image,
//   });

//   try {
//       doc = await product.save();
//       return res.status(201).json(doc);
//   }
//   catch (err) {
//       return res.status(500).json(err);
//   }
// }