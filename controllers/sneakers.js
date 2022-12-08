// add in sneaker model here
const Sneaker = require('../models/sneaker')
const User = require('../models/user')


module.exports = {
    index,
    show,
}

// Show funct
async function show (req, res){
    console.log('Show function just ran')
    // tried to console log req.params.id up here and nothing showed

    try {
        const sneakerDoc = await Sneaker.findById(req.params.id)

        console.log(req.params.id, 'REQ PARAMS')
        console.log(sneakerDoc, 'SNEAKERDOC')

        res.render('sneakers/show', {sneaker: sneakerDoc})

    } catch (err){
        console.log(err)
        res.send('error check terminal')
    }
}


// All sneakers index function
async function index (req, res){
    try{
        const sneakerDocs = await Sneaker.find({})
        console.log(sneakerDocs)

        res.render('sneakers/index', {sneakers: sneakerDocs})

    } catch (err){
        console.log(err)
        res.send('Something wrong check terminal')
    }

}