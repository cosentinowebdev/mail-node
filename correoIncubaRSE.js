var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport
(
  {
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: 
    {
      user: "pruebamenode@gmail.com",
      pass: "unlam1903"
    }
  }
);;

var mailOptions = 
{
  from: 'pruebanode@gmail.com',
  to: 'info@tecnoplug.com',
  subject: 'Envio de notificación desde nodejs',
  html:'<p>Hola, mi nombre es Rodrigo Javier Cosentino, correo rodrigocosentino@outlook.com, y este es mi proyecto en git-hub.</p><p><a href="https://github.com/cosentinowebdev/mail-node.git">https://github.com/cosentinowebdev/mail-node.git<a></p><p>Saludos cordiales</p>'
};

transporter.sendMail(mailOptions, function(error, info)
{
  if (error) 
  {
    console.log(error);
  } else 
  {
    console.log('Email sent: ' + info.response);
  }
});
