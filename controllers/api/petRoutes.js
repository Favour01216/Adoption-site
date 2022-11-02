
const Pet = require("../../modelsxx/Pet");
const cloudinary = require("cloudinary").v2;
const user = require("../../modelsxx/User");
const router = require("express").Router();
const uploader = require("../../utils/helpers");


cloudinary.config({ // Configure Cloudinary
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

router.post("/", async (req, res) => { // Post new pet route
  try {
    let petForm = req.body;
    const image = await uploader(req.body.image); // Upload image to cloudinary, store response as image variable.
    (petForm.image = image.secure_url), // set values of petForm to include image url for storage.
    (petForm.image_public_id = image.public_id);

    const newPet = await Pet.create({ // Create new pet object
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPet);
  } catch (e) {
    res.status(400).json(e);
  }
});

router.get("/", async (req, res) => {
  try {
    const pets = await Pet.findAll({});
    res.status(200).json(pets);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
