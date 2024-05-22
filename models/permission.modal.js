const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    
    Nom : String,
    DateDebut : String,
    DateFin : String,
    DateDemande : String,
    HeureDebut : String,
    HeureFin : String,
    Raison : String,
    Decision:String,
    Explication:String
    
})

module.exports = mongoose.model('permission', userShema)
/*const ContactModel = mongoose.model('user', userShema);

module.exports = ContactModel;*/