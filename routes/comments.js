const router = require('express').Router();
const passport = require('passport');
const sneakerCtrl = require('../controllers/sneakers')
const commentCtrl = require('../controllers/comments')
const isLoggedIn = require('../config/auth')



// add in comments
router.post('/sneakers/:id/comments', commentCtrl.create)


module.exports = router;