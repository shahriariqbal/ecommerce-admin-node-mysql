var HomeModel = require('../../models/home/HomeModel.js');
//require('../../models/')

/*
function HomeController() {

    this.index = function(req, res) {
       var promise = HomeModel.insert();  
       promise.then(function(data){
           res.render('backend/home/index.ejs', {title: 'AdminLTE 2 | Blank Page', content: 'Create by Tuan Anh Zippy <mmmmm@gmail.com>', data: data});
       }).catch(function(err){
           res.status(500).send({ error: err });
       });
       
    }

    this.add = function(req, res) {
       console.log("add");
    }

    this.edit = function(req, res) {
       console.log('edit');
   }

    this.delete = function(req, res) {
       console.log('delete');
    }

}*/
 
async function Index(req, res) {  

    res.set('content-type' , 'text/html; charset=mycharset'); 
    var promise = HomeModel.insert();  
       promise.then(function(data){
           res.render('home/index.ejs', {title: '24Bigbazar.com | Home Page', content: 'Create by Tuan Anh Zippy <mmm@gmail.com>', data: data});
       }).catch(function(err){
           res.status(500).send({ error: err });
       });    
};  
exports.Index = Index;
async function Login(req, res) {  

    res.set('content-type' , 'text/html; charset=mycharset'); 
    var promise = HomeModel.insert();  
       promise.then(function(data){
           res.render('home/login.ejs', {title: '24Bigbazar.com | Login', content: 'Create by Tuan Anh Zippy <mmm@gmail.com>', data: data});
       }).catch(function(err){
           res.status(500).send({ error: err });
       });    
};  
exports.Login = Login;
//module.exports = new HomeController();