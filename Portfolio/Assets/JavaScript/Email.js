const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "Gmail",
    });

    const mailOptions = {
        from: email,
        to: "tomasz.wnuk.biznes@gmail.com",
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Email sending failed:", error);
            res.status(500).send("Email sending failed.");
        } else {
            console.log("Email sent:", info.response);
            res.status(200).send("Email sent successfully.");
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
