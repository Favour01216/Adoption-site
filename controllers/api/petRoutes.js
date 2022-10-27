const Pet = require('../../models/pets');
const cloudinary = require('cloudinary');
const user = require('../../models/users');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

router.post('/')
