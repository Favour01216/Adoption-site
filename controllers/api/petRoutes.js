const Pet = require('../../models/pets');
const cloudinary = require('cloudinary');
const user = require('../../models/user');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

router.post('/', withAuth, async (req, res) => {
  try {
    const newPet = await Pet.create({
      ...req.body,
      user_id: req.session.user_id,
    })
    res.status(200).json(newPet);
  } catch (e) {
    res.status(400).json(e);
  }
}, async (req,res) => {
  try {
    const result = await cloudinary.uploader.upload(req.files.image.path); // Should get a file path to image locally
    res.status(200).json ({
      url: result.secure_url, // https url from cloudinary
      public_id: result.public_id,
    });
  } catch (e) {
    res.status(400).json(e);
  }
})

module.exports = router;