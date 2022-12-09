const router = require('express').Router();
const passport = require('passport');
const sneakerCtrl = require('../controllers/sneakers')
const commentCtrl = require('../controllers/comments')
const isLoggedIn = require('../config/auth')


// actually changing the comment
router.put('/comments/:id', commentCtrl.update)

// get the comment to update 
router.get('/comments/:id/edit', commentCtrl.edit)

// delete comments
router.delete('/comments/:id', commentCtrl.delete)

// add in comments
router.post('/sneakers/:id/comments', commentCtrl.create)


module.exports = router;