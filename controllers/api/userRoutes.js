const router = require("express").Router();
const { User } = require("../../modelsxx");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => { // Create new account registration
  try {
    const userData = await User.create(req.body); // create new user

    req.session.save(() => { // save session
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.admin = userData.admin; // save admin status for display settings

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => { // login route
  try {
    const userData = await User.findOne({ where: { email: req.body.email } }); // find user if email exists
    if (!userData) { // if no user is found, send error message
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await bcrypt.compareSync( // Compare password validation
      req.body.password,
      userData.password
    );

    if (!validPassword) { // if password invalid, send error
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    req.session.save(() => { // save session
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.admin = userData.admin;
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => { // logout route
  if (req.session.logged_in) { // destroy session if it exists
    req.session.destroy(() => {
      res.status(204).end();
      res.render("/login");
    });
  } else { // otherwise return error, not logged in
    res.status(404).end();
  }
});

module.exports = router;
