// THIS IS THE PRE AADDED DATA AKA THE SNEAKERS 
require('dotenv').config();
// require a couple things
const mongoose = require('mongoose');
const Sneaker = require('./models/sneaker')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!!');
    })
    .catch((err) => {
        console.log(err)
    })

const seedSneakers = [
    {
        sneakerName: 'Drake x Nike Air Force 1',
        releaseDate: '12-08-2022',
        sneakerDetails: 'Price: $160, Style Code: CZ8065-100',
        sneakerImage: 'https://i.imgur.com/falceAt.jpg',
        comments: []
    },
    {
        sneakerName: 'Air Jordan 11 Retro Varsity Red',
        releaseDate: '12-10-2022',
        sneakerDetails: 'Price: $225, Style Code: CT8012-116',
        sneakerImage: 'https://i.imgur.com/WxQPFLv.jpg',
        comments: []
    },
    {
        sneakerName: 'Nike Dunk Low, Grey Fog',
        releaseDate: '12-16-2022',
        sneakerDetails: 'Price: $120, Style Code: DQ7683-001',
        sneakerImage: 'https://i.imgur.com/I8ACec3.jpg',
        comments: []
    },
    {
        sneakerName: 'Air Jordan 2 Retro Chicago',
        releaseDate: '12-30-2022',
        sneakerDetails: 'Price: $200, Style Code: DX2454-106',
        sneakerImage: 'https://i.imgur.com/tKbUXbV.jpg',
        comments: []
    },
    {
        sneakerName: 'Jordan 1 Low x Travis Scott Phantom',
        releaseDate: '12-20-2022',
        sneakerDetails: 'Price: $150, Style Code: DM7866-001',
        sneakerImage: 'https://i.imgur.com/K12kgQK.jpg',
        comments: []
    },
    {
        sneakerName: 'Air Jordan 3 White Cement Reimagined',
        releaseDate: '03-11-2023',
        sneakerDetails: 'Price: $210, Style Code: DN3707-100',
        sneakerImage: 'https://i.imgur.com/ckaUeXD.jpg',
        comments: []
    },
];

const seedDB = async () => {
    await Sneaker.deleteMany({});
    await Sneaker.insertMany(seedSneakers);
    const sneakers = await Sneaker.find({})
    console.log(sneakers)
};

seedDB().then(() => {
    mongoose.connection.close()
})