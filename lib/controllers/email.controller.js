const nodemailer = require('nodemailer');
const senderConfig = require('../../config/email.config')
const Email = require('../models/Email.Model');


const createTransport = nodemailer.createTransport(senderConfig);

const emailSender = async (req,res) => {
  const {body} = req;

  const email = new Email(body.name, body.email, body.subject, body.message) 

  await createTransport.sendMail(email, function (error, info) { 
    if(error){ 
         console.info(error); 
         res.status(500).send("Ups there was a problem... try latter pleas :)");
    } else{ 
         console.info("Correo enviado correctamente"); 
         createTransport.close(); 
         res.status(200).send("OK");
    } 
  });

}

module.exports = emailSender;