
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
  });

const reviewSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: String,
    associatedUsername: String
});

const User = mongoose.model('User', userSchema);
const Review = mongoose.model('Review', reviewSchema);

app.post('/api/users', async (req, res) => {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    try {
      await user.save();
      res.send(user);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.get('/api/users', async (req, res) => {
    try {
      let users = await User.find();
      res.send(users);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.post('/api/review', async (req, res) => {
    const review = new Review({
      name: req.body.name,
      description: req.body.description,
      date: req.body.date,
      associatedUsername: req.body.associatedUsername
    });

    try {
      await review.save();
      res.send(review);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.delete('/api/review/:id', async (req, res) => {
    try {
      await Review.deleteOne({
       _id: req.params.id
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

  app.get('/api/review', async (req, res) => {
    try {
      let reviews = await Review.find();
      console.log(reviews);
      res.send(reviews);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

app.listen(3000, () => console.log('Server listening on port 3000!'));