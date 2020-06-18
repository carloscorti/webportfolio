const express = require('express');
const emailSender = require('../controllers/email.controller');

const router = () => {
  const emailRouter = express.Router();

  emailRouter.route('/').post(emailSender)

  return emailRouter;

}

module.exports = router;