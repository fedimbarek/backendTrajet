const permissionModal = require('../models/permission.modal');

exports.ajouterpermission =  async (req, res) => {

    //console.log(req.body);
    const permissionObj = {
      Nom: req.body.Nom,
      DateDebut: req.body.DateDebut,
      DateFin: req.body.DateFin,
      DateDemande: req.body.DateDemande,
      HeureDebut: req.body.HeureDebut,
      HeureFin: req.body.HeureFin,
      Raison: req.body.Raison,
    }
  
    try {
      const createpermission = await permissionModal.create(permissionObj);
      res.status(200).json({ createpermission });
    } catch (error) {
      res.status(400).json({ error });
    }
  }


  exports.listepermission =  (req, res) => {
    permissionModal.find({})
      .then(contactpermission => {
        res.status(200).json({ contactpermission });
      })
      .catch(error => {
        res.status(400).json({ error });
      });
  }


  exports.modifierPermission =  (req, res)=>{
    // les traitmentt (modifier)
 //   res.send("modifier")
 const param = req.params.id;
 const modifiedObj ={
  Nom: req.body.Nom,
  DateDebut: req.body.DateDebut,
  DateFin: req.body.DateFin,
  DateDemande: req.body.DateDemande,
  HeureDebut: req.body.HeureDebut,
  HeureFin: req.body.HeureFin,
  Raison: req.body.Raison,
  Decision: req.body.Decision,
  Explication: req.body.Explication,
     
 }
 permissionModal.findByIdAndUpdate(param,modifiedObj)
 .then(modifiedPermision => {
  res.status(200).json({ "message" : "modifier contact avec success" });
 })
 .catch(error => {
   res.status(400).json({ error });
 });
}


exports.supprimerpermission = (req, res)=>{
  //les traitements suppression
  const param = req.params.id;
  // tikhdem ki tastit console.log(param);
  permissionModal.findByIdAndDelete(param)
  .then(deletedcontact => {
    res.status(200).json({ "message" : "delete permision avec success" });
  })
  .catch(error => {
    res.status(400).json({ error });
  });
}
