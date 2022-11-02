const withAuth = (req, res, next) => { // Check if user is logged in
    if (!req.session.logged_in) { // If not logged in, redirect to login page
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  