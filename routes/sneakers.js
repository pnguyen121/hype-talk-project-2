const router = require('express').Router();
const passport = require('passport');
const sneakerCtrl = require('../controllers/sneakers')
const isLoggedIn = require('../config/auth')



// 

// show sneaker page when clickedd on
router.get('/:id', sneakerCtrl.show)

// show all of the sneakers 
router.get('/', sneakerCtrl.index)





module.exports = router;