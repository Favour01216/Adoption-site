module.exports = async function upload(imagePath) {
  cloudinary = require('cloudinary').v2 // Use Cloudinary
  const options = { // Set options
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };
  try {
    const result = await cloudinary.uploader.upload(imagePath, options); // Upload image
    return result;
  } catch (error) {
    console.error(error)
  }
}