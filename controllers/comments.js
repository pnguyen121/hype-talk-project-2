const Sneaker = require('../models/sneaker')
const User = require('../models/user')


module.exports = {
    create,
}



// create a comment
async function create (req, res){
    try{

        const sneakerDoc = await Sneaker.findById(req.params.id)

        console.log(sneakerDoc, 'SNEAKER DOC')
        console.log(req.body, 'REQ.BODY IS CONTENT OF FORM')
        // add user to the comment
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    sneakerDoc.comments.push(req.body)

    sneakerDoc.save(function (err) {
        console.log(err, 'err from sneakerDoc.save call back')


        res.redirect(`/sneakers/${req.params.id}`)
    })


    } catch(err){
        console.log(err)
        res.send('check term for err')

    }
}