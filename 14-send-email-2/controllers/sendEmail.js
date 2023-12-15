const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const sendTheEmail = async (req, res) => {
  const html = `
    <h1>Heading</h1>
    <p>the test should be here...</p>
  `;

  // create transport
  // mail server we will be sending information from
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EmailAddress,
      pass: process.env.EmailPassword,
    },
  });

  // mail options
  let mailOptions = {
    from: {
      name: "chris lab",
      address: process.env.EmailAddress,
    }, // sender address
    to: ["cristiannsengi@gmail.com"], // list of receivers
    subject: "Testing email",
    html: html,
    attachments: [
      {
        filename: "test.pdf",
        path: path.join(__dirname, "test.pdf"),
        contentType: "application/pdf",
      },
    ],
  };

  // func to send mail
  await transporter.sendMail(mailOptions);

  console.log("Email sent successfully");
  res.send("Email sent successfully");
};

module.exports = sendTheEmail;
