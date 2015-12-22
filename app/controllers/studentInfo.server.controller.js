
var mongoose = require('mongoose');	
var studentInfoModel = mongoose.model('STUDENT_INFO');

	module.exports = {

		



		saveStudentInfo : function(reqModelObj){
			console.log(' Success to controller');
			var studentInfoObj = new studentInfoModel(reqModelObj);
			studentInfoObj.save();


		}



	}




	