const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  // creating test account
  let testAccount = await nodemailer.createTestAccount();
  //// create transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "mertie33@ethereal.email",
      pass: "B3kQuwUBWf8hQA9JMK",
    },
  });

  let info = await transporter.sendMail({
    from: '"chris lab" <cristiannsengi@gmail.com>',
    to: "bar@example.com",
    subject: "hello there",
    html: "<h2>we are sending email with nodejs</h2>",
  });

  res.json(info);
};

module.exports = sendEmail;
