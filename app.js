var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
require('./app/models/studentInfo.server.model');
var index = require('./app/routes/index.js');


var mongoose = require('mongoose');                         //add for Mongo support
mongoose.connect('mongodb://localhost/StudentDatabase');  

var studentInfoRoute =  require('./app/routes/studentInfo.server.route');



var app = express();

app.set('views', path.join(__dirname, 'app/views'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');


app.use(logger('dev'));
app.use(session({
  secret: 'keyboard cat'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));    



app.use('/',index);
app.use('/StudentInfo',studentInfoRoute);
/*app.use('/StudentInfo',function(req,res){
	res.send('aldfkdsjfl');
});*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// error handlers

// development error handler
// will print stacktrace

// production error handler
// no stacktraces leaked to user

 app.set('port', process.env.PORT || 3000);

    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port);
    });


module.exports = app;