const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    title: String,
    description: String,
    latitude: Number,
    longitude: Number
   
    
})

module.exports = mongoose.model('destinations', userShema)
/*const ContactModel = mongoose.model('user', userShema);

module.exports = ContactModel;*/
