const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');

router.get('/', (req,res) => {
    try{
        const posts =  Posts.find({'title':'Prasun'});
        console.log(posts);
    }catch(err){
        res.json({ message:err });
    }
    
});

router.post('/', async  (req,res) => {
    const post = new Posts({
        "title": req.body.title,
        "description": req.body.description
    });
     
    
    
    try{
        const savedPost = await post.save();
        console.log(savedPost);
        res.json(savedPost);
    }catch (err){
        res.json({message:err});
    }

});

module.exports = router;