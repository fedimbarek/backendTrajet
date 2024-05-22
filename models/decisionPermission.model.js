const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    
   
    nom_dagent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',  // Reference to the 'users' model
    },
    Decision:String,
    Explication:String
   
   
   
   
   
    
})

module.exports = mongoose.model('Decision', userShema)
/*const ContactModel = mongoose.model('user', userShema);

module.exports = ContactModel;*/