'use strict'


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudentInfo = new Schema({

	firstName : {
		type : String,
		required : " firstName can not be blank",
		trim : true
	},

	LastName : {
		type : String,
		required : " LasName can not be blank",
		trim : true
	},
	DOB : {
		type : String,
		required : " Date of Birth can not be blank",
		trim : true
	},
	Age : {
		type : String,
		trim : true
	},

	PermanentAdress : {

		type : String,
		trim : true
	},

	CorresAddress : {

		type : String,
		trim : true
	},


	FatherName : {

		type : String,
		trim : true
	},


	MotherName : {

		type : String,
		trim : true
	},

	phone1 :{
		type : Number
	},

	phone2 :{
		type : Number
	}
	
});

mongoose.model('STUDENT_INFO' , StudentInfo) ;

