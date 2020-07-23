//Importing Required Packages for defining Routes for User Model

const router = require("express").Router();
let User = require("../model/user.model");

//Public Route for getting all Users
router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.sendStatus(400).json("Error " + err));
});

//Public Route for getting single User
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.sendStatus(400).json('Error ' + err))
});

//Public Route for Deleting a Specific User
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(users => res.json(users.username + ' has been removed from the Application'))
    .catch(err => res.sendStatus(400).json('Error ' + err))
});

//Public route to Update a Specific User
router.route('/update/:id').post((req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }, (err, result) => {
    if (err) res.sendStatus(400).json('Error ' + err);
    else res.json(req.body.username + ' Details has been updated');
  }
  )
});

//Public Route for adding a new User
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ username, email, password });

  newUser.save()
    .then(() => res.json(req.body.username + ' added as a New User'))
    .catch(err => res.sendStatus(400).json('Error ' + err));
});

module.exports = router;
