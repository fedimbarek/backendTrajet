const mongoose = require("mongoose")

const postShema = new mongoose.Schema({
    name : String,
    description : String ,
    media : [],
    creator : {
        type : mongoose.Types.ObjectId,
        ref : 'users',
        required: true
    }

})

module.exports = mongoose.model('posts', postShema)

