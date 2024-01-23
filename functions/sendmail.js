const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        // host:[YOUR SMTP SERVER],
        // port:[YOUR SMTP SERVER PORT],
        auth:{
         user: process.env.GMAIL_USER,
         pass: process.env.GMAIL_PASSWORD
    }
    });

    transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `Sending with React, Nodemailer and Netlify`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}