const Sneaker = require('../models/sneaker')
const User = require('../models/user')


module.exports = {
    create,
    delete: deleteComment,
    edit: getComment,
    update,
}

// actually change the comment 
async function update (req, res){
    try{
        console.log('update function just ran')

        const sneakerDoc = await Sneaker.findOne({'comments._id': req.params.id})

        const commentSubdoc = sneakerDoc.comments.id(req.params.id);
        console.log(commentSubdoc)

        // ensure that the comment wass created by the logged in user
        // Update the text of the comment
        commentSubdoc.commentContent = req.body.text

        // save the document since we changed the comment within it
        sneakerDoc.save(function(err){
            // redirect back to the books show view
            res.redirect(`/sneakers/${sneakerDoc._id}`)
        })

    } catch(err){

        console.log(err)
        res.send('check terminal error')
    }
}

// getting the comment to update
async function getComment (req, res){
    try{
        console.log('getComment function raan')
        const sneakerDoc = await Sneaker.findOne({'comments._id': req.params.id})
    
            const comment = sneakerDoc.comments.id(req.params.id);

            res.render('comments/edit', {comment: comment})


    }catch(err){
        console.log(err)
        res.send('error check terminal')
    }
}



// delete a comment
function deleteComment (req, res){
    Sneaker.findOne({'comments._id': req.params.id, 'comments.user': req.user._id}, function(err, sneakerDoc){
        if(!sneakerDoc) return res.redirect('/sneakers')

        sneakerDoc.comments.remove(req.params.id);

        // save it since we change the document
        sneakerDoc.save(function(err){
            if(err) return res.send('err, check terminaal fix this');
            res.redirect(`/sneakers/${sneakerDoc._id}`)
        })
    })
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