const destinationModel = require('../models/destinations.modal')
/*exports.ajouterdestination =  async (req, res) => {

    //console.log(req.body);
    const destinationObj = {
      zone: req.body.zone,
      lieu: req.body.lieu
    }
  
    try {
      const createddestination = await destinationModel.create(destinationObj);
      res.status(200).json({ createddestination });
    } catch (error) {
      res.status(400).json({ error });
    }
  }*/
  exports.ajouterdestination =  async (req, res) => {
    try {
      const { title, description, latitude, longitude } = req.body;
  
      if (!title || !description || !latitude || !longitude) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const location = new destinationModel({
        title,
        description,
        latitude,
        longitude
      });
  
      await location.save();
  
      res.status(201).json({ message: 'Location added successfully', location });
    } catch (err) {
      console.error('Error adding location', err);
      res.status(500).json({ message: 'Error adding location' });
    }
  }

  exports.listerdestination =  (req, res) => {
    destinationModel.find({})
      .then(contactdetination => {
        res.status(200).json({ contactdetination });
      })
      .catch(error => {
        res.status(400).json({ error });
      });
  }


  exports.modifierdestination =  (req, res)=>{
    // les traitmentt (modifier)
 //   res.send("modifier")
 const param = req.params.id;
 const modifiedObj ={
  title: req.body.title,
  description: req.body.description,
  latitude: req.body.latitude,  
  longitude: req.body.longitude
 }
 destinationModel.findByIdAndUpdate(param,modifiedObj)
 .then(modifiedContact => {
  res.status(200).json({ "message" : "modifier contact avec success" });
 })
 .catch(error => {
   res.status(400).json({ error });
 });
}

// fonction supprimer

exports.supprimerdestination = (req, res)=>{
    //les traitements suppression
    const param = req.params.id;
    // tikhdem ki tastit console.log(param);
    destinationModel.findByIdAndDelete(param)
    .then(deletedcontact => {
      res.status(200).json({ "message" : "delete destination avec success" });
    })
    .catch(error => {
      res.status(400).json({ error });
    });
}
