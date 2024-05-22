const PlanningModel = require('../models/planing.model');  // Corrected model path
const User = require("../models/user.model"); 
const DestinationModel = require("../models/destinations.modal");
/*exports.ajouterPlannig = async (req, res) => {
    const plannigObj = {
        nom: req.body.nom_dagent,
        date: req.body.date
    };

    try {
        // Find the agent by name
        const agent = await User.findOne({ nom: plannigObj.nom });

        if (!agent) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        // Create a new planning entry
        const createdPlanning = await PlanningModel.create({
            nom_dagent: agent._id,  // Use the _id of the agent
            date: plannigObj.date,
        });

        res.status(200).json({ createdPlanning });
    } catch (error) {
        res.status(400).json({ error });
    }
}*/
exports.ajouterPlannig = async (req, res) => {
    const planningObj = {
        nom: req.body.nom_dagent,
        date: req.body.date,
        title: req.body.title,
        Tache: req.body.Tache
    };

    try {
        // Find the agent by name
        const agent = await User.findOne({ nom: planningObj.nom });

        if (!agent) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        // Find the destination by ID
        const destination = await DestinationModel.findOne({ title: planningObj.title });

        if (!destination) {
            return res.status(404).json({ error: 'Destination not found' });
        }

        // Create a new planning entry
        const createdPlanning = await PlanningModel.create({
            nom_dagent: agent._id,  // Use the _id of the agent
            date: planningObj.date,
            title: destination._id, // Use the _id of the destination
            Tache: planningObj.Tache
        });

        res.status(200).json({ message: 'Planning created successfully', createdPlanning });
    } catch (error) {
        res.status(400).json({ error });
    }
};
/*exports.afficherPlannig = async (req, res) => {
    try {
        const planningList = await PlanningModel.find().populate('nom_dagent', 'nom');

        res.status(200).json({ planningList });
    } catch (error) {
        res.status(400).json({ error });
    }
};*/
exports.afficherPlannig = async (req, res) => {
    try {
        const planningList = await PlanningModel.find().populate('nom_dagent', 'nom').populate('title');

        res.status(200).json({ planningList });
    } catch (error) {
        res.status(400).json({ error });
    }
}

exports.getPlanningById = async (req, res) => {
    try {
        const planning = await PlanningModel.findById(req.params.id).populate('nom_dagent', 'nom').populate('title');

        if (!planning) {
            return res.status(404).json({ error: 'Planning not found' });
        }

        res.status(200).json({ planning });
    } catch (error) {
        res.status(400).json({ error });
    }
};

/*exports.modifierPlanning =  (req, res)=>{
    // les traitmentt (modifier)
 //   res.send("modifier")
 const param = req.params.id;
 const modifiedObj ={
    nom: req.body.nom_dagent,
    date: req.body.date
  
 }
 PlanningModel.findByIdAndUpdate(param,modifiedObj)
 .then(modifiedagent => {
  res.status(200).json({ "message" : "modifier contact avec success" });
 })
 .catch(error => {
   res.status(400).json({ error });
 });
}*/

/*exports.modifierPlanning = async (req, res) => {
    const planningId = req.params.id;
    const modifiedObj = {
        nom_dagent: req.body.nom_dagent,
        date: req.body.date
    };

    try {
        // Find the agent by name
        const agent = await User.findOne({ nom: modifiedObj.nom_dagent });

        if (!agent) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        // Update the planning document by ID
        const updatedPlanning = await PlanningModel.findByIdAndUpdate(planningId, {
            nom_dagent: agent._id,  // Use the _id of the agent
            date: modifiedObj.date
        }, { new: true });

        if (!updatedPlanning) {
            return res.status(404).json({ error: 'Planning not found' });
        } 

        res.status(200).json({ message: 'Planning updated successfully', updatedPlanning });
    } catch (error) {
        res.status(400).json({ error });
    }
};*/

exports.modifierPlanning = async (req, res) => {
    const planningId = req.params.id;
    const modifiedObj = {
        nom: req.body.nom_dagent,
        date: req.body.date,
        title: req.body.title,
        Tache: req.body.Tache
    };

    try {
        // Find the agent by name
        const agent = await User.findOne({ nom: modifiedObj.nom });

        if (!agent) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        // Find the destination by ID
        const destination = await DestinationModel.findOne({ title: modifiedObj.title });

        if (!destination) {
            return res.status(404).json({ error: 'Destination not found' });
        }

        // Update the planning document by ID
        const updatedPlanning = await PlanningModel.findByIdAndUpdate(planningId, {
            nom_dagent: agent._id,  // Use the _id of the agent
            date: modifiedObj.date,
            title: destination._id, // Use the _id of the destination
            Tache: modifiedObj.Tache
        }, { new: true });

        if (!updatedPlanning) {
            return res.status(404).json({ error: 'Planning not found' });
        } 

        res.status(200).json({ message: 'Planning updated successfully', updatedPlanning });
    } catch (error) {
        res.status(400).json({ error });
    }
};


/*exports.modifierPlanning = async (req, res) => {
    try {
        const planningId = req.params.id;
        const modifiedObj = {
            nom_dagent: req.body.nom_dagent,
            date: req.body.date
        };

        // Update the planning document by ID
        const updatedPlanning = await PlanningModel.findByIdAndUpdate(planningId, modifiedObj, { new: true });

        if (!updatedPlanning) {
            return res.status(404).json({ error: 'Planning not found' });
        }

        res.status(200).json({ message: 'Planning updated successfully', updatedPlanning });
    } catch (error) {
        res.status(400).json({ error });
    }
};
*/








