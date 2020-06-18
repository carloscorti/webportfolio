class Email {
  constructor (name, email, subject, message) {
    this.to = 'carlosportfoliodev@gmail.com',
    this.subject = `${subject}`,
    this.text = `Message from: ${name} - ${email}\r\nMensaje: ${message}`
  }
}

module.exports = Email;
