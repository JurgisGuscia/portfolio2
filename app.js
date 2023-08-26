require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
var sslRedirect = require("heroku-ssl-redirect").default;
const Mailjet = require("node-mailjet");

app.listen(process.env.PORT || 3000, () => {
  console.log("server listening");
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(sslRedirect());
const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

const root = require("path").join(__dirname, "client", "build");
app.use(express.static(root));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.post("/", (req, res) => {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "NyxPlatform@mail.com",
          Name: "Portfolio",
        },
        To: [
          {
            Email: "j.d.guscia@gmail.com",
          },
        ],
        Subject: req.body.name,
        htmlPart:
          req.body.message +
          "<br><br>" +
          "Kontaktinis elektroninis paštas: " +
          req.body.email,
      },
    ],
  });

  request
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.redirect("/");
    });
});
