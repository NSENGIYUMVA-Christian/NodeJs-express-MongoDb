const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  //transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "kamren.carter77@ethereal.email",
      pass: "6yMwKTBNNCebQ6FKwy",
    },
  });
  // others func
  let info = await transporter.sendMail({
    from: '"Chris Dev" <cristiannsengi@gmail.com>',
    to: "bar@example.com",
    subject: "hello",
    html: "<h2>Sending emails with nodeJs</h2>",
  });

  res.json(info);
};

module.exports = sendEmail;
