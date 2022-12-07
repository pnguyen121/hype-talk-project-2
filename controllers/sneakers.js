// add in sneaker model here


module.exports = {
    index,
    show,
}

// Show funct
async function show (req, res){
    console.log('Show function just ran')
}


// All sneakers index function
async function index (req, res){

    
    res.render('sneakers/index')
}