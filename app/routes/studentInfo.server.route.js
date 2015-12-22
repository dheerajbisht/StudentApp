'use strict'

var express = require('express');
var router = express.Router();
var studentInfoController = require('../controllers/studentInfo.server.controller.js');

//router.post('/studentInfo',studentInfoController.saveStudentInfo(req.studentInfo))restore;
router.route('/#/StudentInfo/Register').post(function(req,res){

	console.log('It has come to POST METhOD');
});

/*router.route('/x').get(function(req,res){

	console.log('It has come to firs METhOD');
	res.send('It has come to first METhOD');
});*/
router.route('/StudentInfo/Register').get(function(req,res){

	console.log('It has come to POST METhOD');
	res.send('It has come to POST METhOD');
});

router.route('/Register').get(function(req,res){

	console.log('It has come to GET METhOD');
	res.send('It has come to Get METhOD');
});

router.route('/StudentInfo/Register').post(function(req,res){

	console.log('It has come to POST METhOD');
	res.send('It has come to StudentInfo POST METhOD');
});
router.route('/Register').post(function(req,res){
console.log("Route sucess");
studentInfoController.saveStudentInfo(req.body);


});


module.exports= router;

