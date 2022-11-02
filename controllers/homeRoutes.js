const router = require("express").Router();
const { Pet, User } = require("../modelsxx");

router.get("/", async (req, res) => { // Get all pets
  try {
    const petData = await Pet.findAll(); // retrieve all pets from db
    const pets = petData.map((pet) => pet.get({ plain: true })); // serialize pets
    pets.map((pet) => (pet.logged_in = req.session.logged_in)); // add session logged_in to pet object to access in handlebar
    res.render("homepage", { // render homepage
      pets,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/pets/:id", async (req, res) => { // Get specific pet using id
  try {
    const petData = await Pet.findByPk(req.params.id); // Find pet

    const pet = petData.get({ plain: true }); // serialize
    let isCat; // Set var to check if species is cat
    if (pet.species == "Cat") { // set isCat, used for handlebar icon styling
      isCat = true;
    } else {
      isCat = false;
    }
    pet.isCat = isCat;
    res.render("pet", { // Render page
      ...pet,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/add", async (req, res) => { // Add new pet page
  try {
    res.render("admin", { // render admin page, with form for adding new pet
      logged_in: req.session.logged_in,
      admin: req.session.admin,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => { // render login page
  if (req.session.logged_in) { // if session is logged in, redirect to homepage
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
