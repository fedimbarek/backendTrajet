const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    nom : String,
    prenom:String,
    cin : String,
    email: String,
    password : String,
    role:{
        type:String,
        enum :['admin','agent'],
        default : "agent"
    }, 
    telephone : String,
    picture : String,
    adresse : String,
    moyen_transport : String,
    etat_active : String,
    
})

module.exports = mongoose.model('users', userShema)
/*const ContactModel = mongoose.model('user', userShema);

module.exports = ContactModel;*/
