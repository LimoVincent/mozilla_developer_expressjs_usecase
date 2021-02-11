var express = require('express')

var router = express.Router()
var coolRouter = require('./catalog')

router.use('./cool', coolRouter)
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Users')
})

module.exports = router
