const User = require("../models/user.model")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
exports.signup =(req,res)=>{

    const data = {
        nom: req.body.nom,
        prenom:req.body.prenom,
        cin: req.body.cin,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password,10) ,
        telephone : req.body.telephone,
        picture : req.body.picture,
        adresse : req.body.adresse,
        moyen_transport : req.body.moyen_transport,
        etat_active : req.body.etat_active ? 'Active' : 'Inactive',
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

exports.signin = async(req,res) =>{
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
            if (user.etat_active === 'Inactive') {
                return res.status(403).json({ message: 'Access denied. User is inactive.' });
            }
            const token = jwt.sign(
                { data: { id: user._id, role: user.role, etat_active: user.etat_active} },
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

exports.listeragent =  (req, res) => {
    User.find({})
      .then(contactList => {
        res.status(200).json({ contactList });
      })
      .catch(error => {
        res.status(400).json({ error });
      });
  }

  exports.modifieragnet =  (req, res)=>{
    // les traitmentt (modifier)
 //   res.send("modifier")
 const param = req.params.id;
 const modifiedObj ={
    nom: req.body.nom,
    prenom:req.body.prenom,
    cin: req.body.cin,
    email:req.body.email,
    password: bcrypt.hashSync(req.body.password,10) ,
    telephone : req.body.telephone,
    picture : req.body.picture,
    adresse : req.body.adresse,
    moyen_transport : req.body.moyen_transport,
    etat_active : req.body.etat_active ? 'Active' : 'Inactive',
  
 }
 User.findByIdAndUpdate(param,modifiedObj)
 .then(modifiedagent => {
  res.status(200).json({ "message" : "modifier contact avec success" });
 })
 .catch(error => {
   res.status(400).json({ error });
 });
}
