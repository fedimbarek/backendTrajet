const User = require("../models/responsable.model")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signupx =(req,res)=>{

    const data = {
        nom: req.body.nom,
        prenom:req.body.prenom,
        cin: req.body.cin,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password,10) ,
        telephone : req.body.telephone,
        picture : req.body.picture,
        adresse : req.body.adresse,
       
       
    }
const _user = new User(data);

_user.save().then(
    (createdUser)=> {
        res.status(200).json({createdUser})
    }
).catch(
    (err)=>{
        res.status(400).json({error})
    }
)
}



exports.signinx = async(req,res) =>{
    // const email = req.body.email;
    // const password=req.body.password;
// ou
    const {email , password} = req.body;

    const user = await User.findOne({
        email : email
    })
    if(!user){
        return  res.status(400).json({message : "Email invalid ..."})
    }
    // bcrypt.compare(password, user.password).then(
        // bcrypt.compare(password , user.password).then(
        // (isMatch) => {
            // if(isMatch == false){ //false
                // return  res.status(400).json({message : "Password invalid ..."})

            // }else{
                // // true        
                // // gen Token
                // const token = jwt.sign(
                    // {data :{id : user._id, role : user.role}},
                    // process.env.CLE,
                    // {expiresIn : "1h"}
                    // )
                    // return  res.status(200).json({message : " success ...",
                    // token : token,
                    // user : user
                
                // })

            // }
        // }
    // )
    bcrypt.compare(password, user.password)
    .then((isMatch) => {
        if (isMatch) {
            const token = jwt.sign(
                { data: { id: user._id, role: user.role } },
                process.env.CLE,
                { expiresIn: "1h" }
            )           
    return res.status(200).json({
        message: "Success ...",
        token: token,
        user: user
    })
        } else {
            // Password is correct
            // Generate Token
            
            return res.status(400).json({ message: "Password invalid ..." });
            
            
             
        }
    })
    .catch((error) => {
        // Handle errors in case bcrypt.compare or jwt.sign fails
        console.error("Error during authentication:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    });







}

exports.listerresponable =  (req, res) => {
    User.find({})
      .then(contactList => {
        res.status(200).json({ contactList });
      })
      .catch(error => {
        res.status(400).json({ error });
      });
  }