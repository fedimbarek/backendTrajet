const express = require('express')

const router = express.Router();

const userController = require("../controllers/user.controller")
const destinationController = require("../controllers/destination.controller")
const PlannigController = require("../controllers/planning.controller")
const userController1 = require("../controllers/responsable.controller")
const permissionController = require("../controllers/permission.controller")
const decisionPermission = require("../controllers/decisionPermission.controller")

const checkActiveStatus = require('../middleware/checkActiveStatus');
const extractUser = require('../middleware/extractUser');

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)
router.get('/listeragent',   userController.listeragent)
router.post('/signupr', userController1.signupx)
router.post('/signinr', userController1.signinx)
router.get('/listeragentr' , userController1.listerresponable)
router.put('/modifier/:id' , userController.modifieragnet)
router.post('/destination', destinationController.ajouterdestination)
router.get('/listerdestination' , destinationController.listerdestination)
router.put('/modifierdestination/:id' , destinationController.modifierdestination)
router.delete('/supprimerdestination/:id' , destinationController.supprimerdestination)

router.post('/plannig', PlannigController.ajouterPlannig)
router.get('/afficherplannig', PlannigController.afficherPlannig)
router.get('/afficherplanning/:id', PlannigController.getPlanningById); 
router.put('/Modifierplannig/:id' , PlannigController.modifierPlanning)

router.post('/permission', permissionController.ajouterpermission);
router.get('/listepermission' , permissionController.listepermission);
router.put('/modifierPemission/:id' , permissionController.modifierPermission)
router.delete('/supprimerpermission/:id' , permissionController.supprimerpermission)


router.post('/decision', decisionPermission.ajouterDecision)
router.get('/afficherdecision', decisionPermission.afficherDecision)
router.get('/afficherdecision/:id', decisionPermission.getDecisionById);
module.exports = router;