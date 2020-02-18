const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');

router.get('/', (req,res) => {
    try{
        const posts =  Posts.find({'title':'Prasun'});
        console.log(posts);
    }catch(err){
        res.send('WE ARE ON POSTS');
       // res.json({ message:err });
    }
    
});

// router.get('/kshdsagd', (req,res) => {
//     res.send('WE ARE ON POSTS kshdsagd');
// });

router.post('/', (req,res) => {
    const post = new Posts({
        "title": req.body.title,
        "description": req.body.description,
    });
    
   console.log("Prasubn"+post);
    post.save()
    .then(data =>{
        console.log( data );
        res.json( data );
        
    })
    .catch(err =>{
        res.json({ message:err });
    });
    // try{
    //     const savedPost = await post.save();
    //     console.log(savedPost);
    //     res.json(savedPost);
    // }catch (err){
    //     res.json({message:err});
    // }

});

module.exports = router;