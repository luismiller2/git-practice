var express = require('express');
const { resource } = require("../app");
var router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');

const Room = require('../models/Room.model');
const Review = ('../models/Review.model.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rooms' });
});

router.get('/create', isLoggedIn, function(req, res, next) {
  res.render('create-room');
});

router.get('/list', function(req, res, next) {
  Room.find()
  .then((allRooms)=>{
    res.render('list', {allRooms});
  })
});

router.post('/create', isLoggedIn, function(req, res, next) {
    if (!req.body.name || !req.body.description){
        res.render('create-room', {message: 'please fill out all fields'});
    }
    Room.create({
        name: req.body.name,
        description: req.body.description,
        owner: req.session.user._id,
    })
    .then(()=> {
        res.redirect('/rooms/list');
    })
    .catch((error) => {
        console.log("Failed");
        resource.render("create-room", {
          message: "something went wrong creating a room",
        });
      });
});

router.get("/:id/edit", (req, res, next) => {
    Room.findById(req.params.id).then(function (room) {
      console.log(room);
      res.render("update-room", { room: room });
    });
  })

  router.post('/:id/edit', (req, res, next) => {
    let newObj = {};
    Object.keys(req.body).forEach(function (prop){
      if (req.body[prop]) {
        newObj[prop] = req.body[prop];
      }
    });
    Room.findByIdAndUpdate(req.params.id, {...newObj})
    .then(function(results){
      console.log("Success", results);
      res.redirect("/rooms/list")
    })
    .catch(function(error){
      console.log("Failed", error.message)
    })
  });


  router.post('/:id/delete', (req, res, next) => {
    Room.findByIdAndRemove(req.params.id)
    .then(function () {
      res.redirect("/rooms/list");
    })
    .catch(function(error){
      console.log("Failed", error.message)
    })
  });

  router.get('/:id/add-review', isLoggedIn, (req, res) => {
    Room.findById(req.params.id)
    .then(foundRoom ( {
      res.render("add-review", {foundRoom: foundRoom});
    })
    .catch(()=>{
      res.redirect("/");
    });
  });

  router.post('/:id/add-review', isLoggedIn, (req, res, next) => {

    Room.findByIdAndRemove(req.params.id)
    .then(foundRoom ( {
      res.render("add-review", {foundRoom: foundRoom});
    })
    .catch(function(error){
      console.log("Failed", error.message)
    })
  });

module.exports = router;