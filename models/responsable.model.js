const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    nom : String,
    prenom:String,
    cin : String,
    email: String,
    password : String,
    role:{
        type:String,
        enum :['admin','responsable'],
        default : "responsable"
    }, 
    telephone : String,
    picture : String,
    adresse : String,
   
   
    
})

module.exports = mongoose.model('responsable', userShema)
/*const ContactModel = mongoose.model('user', userShema);

module.exports = ContactModel;*/
