const express = require('express');
const app = express();
const axios = require("axios");

app.get('/search', (req, res) => {
    res.render("searchGoals");
})

app.post("/search", (req,res)=> {
    axios.get(`https://api.flickr.com/services/rest?api_key=${process.env.api_key}&method=flickr.photos.search&text=${req.body.search}&format=json&nojsoncallback=1`)
      .then((response) => {
        
        // let photoURLs = response.data.photos.photo.map(
        //   ({server, id, secret}) => `//live.staticflickr.com/${server}/${id}_${secret}.jpg`)
        res.render("populatedGoals", {
          photo: response.data.photos.photo
        });
      })
      .catch((error) => {
      })
})

module.exports = app;

