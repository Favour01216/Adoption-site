const router = require('express').Router();
const { Pet, User } = require('../models'); 
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const petData = await Pet.findAll();
    const pets = petData.map((pet) => pet.get({ plain: true }));
    pets.map((pet) => pet.logged_in = req.session.logged_in);
    res.render('homepage', { 
      pets,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/pets/:id', async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id);

    const pet = petData.get({ plain: true });

    res.render('pet', {
      ...pet,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/add', async (req, res) => {
  try {
    res.render('admin', { 
      logged_in: req.session.logged_in,
      admin: req.session.admin
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
