var mongoose = require('./bddConnect');

var postShema = mongoose.Schema({
    title: String,
    author: String,
    histoire: String,
    date_post: Date,
   
 });
 
 var postModel = mongoose.model('posts', postShema);
 module.exports = postModel;