const router = require('express').Router();
const { Pet, User } = require('../models'); //check model name -> Pet or Pets ? 
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const petData = await Pet.findAll();

    const pets = Data.map((pet) => pet.get({ plain: true }));

    res.render('homepage', { 
      pets, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/pet/:id', async (req, res) => {
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

// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
    
  if (req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('login');
});

module.exports = router;
