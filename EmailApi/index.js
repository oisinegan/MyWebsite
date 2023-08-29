const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("dotenv").config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/SendMessage", (req, res) => {
  let info = req.body;

  const msg = {
    to: "oisinegan00@gmail.com",
    from: "personalwesiteemailsender@gmail.com", // Use the email address or domain you verified above
    subject: "MESSAGE FROM PERSONAL WEBSITE",
    text:
      "Name: " +
      info.fullName +
      "\nEmail: " +
      info.email +
      "\nMessage: " +
      info.message,
  };

  sgMail.send(msg).then(
    () => {},
    (error) => {
      if (error.response) {
      }
    }
  );

  res.send('"EMAIL SENT"');
});

// start the server
app.listen(4000, () => console.log("Server listening on port 4000."));
