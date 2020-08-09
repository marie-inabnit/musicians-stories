var mongoose = require('mongoose');
 require('dotenv').config();


var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology : true
  }
  mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.pjm9h.mongodb.net/<dbname>?retryWrites=true&w=majority`, 
      options,         
      function(err) {
       console.log(err);
      }
  );

  module.exports = mongoose;