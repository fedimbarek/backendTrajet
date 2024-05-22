/*const PlanningModel = require('../models/decisionPermission.model');  // Corrected model path
const User = require("../models/user.model"); 
exports.ajouterDecision = async (req, res) => {
    const plannigObj = {
        nom: req.body.nom_dagent,
        Decision: req.body.Decision,
        Explication: req.body.Explication
    };

    try {
        // Find the agent by name
        const agent = await User.findOne({ nom: plannigObj.nom });

        if (!agent) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        // Create a new planning entry
        const createdPlanning = await PlanningModel.create({
            nom: agent._id,  // Use the _id of the agent
            Decision: plannigObj.Decision,
            Explication: plannigObj.Explication,
        });

        res.status(200).json({ createdPlanning });
    } catch (error) {
        res.status(400).json({ error });
    }
}*/

/*exports.afficherPlannig = async (req, res) => {
    try {
        const planningList = await PlanningModel.find().populate('nom_dagent', 'nom');

        res.status(200).json({ planningList });
    } catch (error) {
        res.status(400).json({ error });
    }
};*/ /*
exports.afficherDecision = async (req, res) => {
    try {
        const planningList = await PlanningModel.find().populate('nom_dagent', 'nom');

        res.status(200).json({ planningList });
    } catch (error) {
        res.status(400).json({ error });
    }
}

exports.getDescisionById = async (req, res) => {
    try {
        const planning = await PlanningModel.findById(req.params.id).populate('nom_dagent', 'nom');

        if (!planning) {
            return res.status(404).json({ error: 'Planning not found' });
        }

        res.status(200).json({ planning });
    } catch (error) {
        res.status(400).json({ error });
    }
};
*/
const Decision = require('../models/decisionPermission.model');  // Corrected model path
const User = require("../models/user.model"); 

exports.ajouterDecision = async (req, res) => {
    const decisionObj = {
        nom_dagent: req.body.nom_dagent,
        Decision: req.body.Decision,
        Explication: req.body.Explication
    };

    try {
        // Find the agent by name
        const agent = await User.findOne({ nom: decisionObj.nom_dagent });

        if (!agent) {
            return res.status(404).json({ error: 'Agent not found' });
        }

        // Create a new decision entry
        const createdDecision = await Decision.create({
            nom_dagent: agent._id,  // Use the _id of the agent
            Decision: decisionObj.Decision,
            Explication: decisionObj.Explication,
        });

        res.status(200).json({ createdDecision });
    } catch (error) {
        res.status(400).json({ error });
    }
}

exports.afficherDecision = async (req, res) => {
    try {
        const decisionList = await Decision.find().populate('nom_dagent', 'nom');

        res.status(200).json({ decisionList });
    } catch (error) {
        res.status(400).json({ error });
    }
}

exports.getDecisionById = async (req, res) => {
    try {
        const decision = await Decision.findById(req.params.id).populate('nom_dagent', 'nom');

        if (!decision) {
            return res.status(404).json({ error: 'Decision not found' });
        }

        res.status(200).json({ decision });
    } catch (error) {
        res.status(400).json({ error });
    }
};










