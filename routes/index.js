var express = require('express');
var router = express.Router();

var postModel = require("../models/posts")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/post-story', async function(req, res, next) {

  /* var datePost= new Date() */;
  var newPost = new postModel({
    title: req.body.titleFront,
    author: req.body.pseudoFront,
    histoire: req.body.storyFront,
   
  })
  
  const savedPost = await newPost.save()

  var result= false;
  if(savedPost){
    result = true;
  }

  res.json({result, savedPost});
});


router.get('/get-posts', async function(req, res, next) {
 var postListData = await postModel.find()
  res.json(postListData);
});

module.exports = router;
