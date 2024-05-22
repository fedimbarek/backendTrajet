const mongoose = require("mongoose")
const User = require("./user.model")
const planningShema = new mongoose.Schema({
    nom_dagent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',  // Reference to the 'users' model
    },
    date:Date,
    title: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'destinations',  // Reference to the 'users' model
    },
    Tache:String,
})

module.exports = mongoose.model('planning', planningShema)
/*const ContactModel = mongoose.model('user', userShema);

module.exports = ContactModel;*/
