const router = require('express').Router();
const passport = require('passport');
const sneakerCtrl = require('../controllers/sneakers')
const commentCtrl = require('../controllers/comments')
const isLoggedIn = require('../config/auth')



// delete comments
router.delete('/comments/:id', commentCtrl.delete)

// add in comments
router.post('/sneakers/:id/comments', commentCtrl.create)


module.exports = router;