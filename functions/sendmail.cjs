const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = function(event, context, callback) {
    console.log(event);
    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        // service: 'gmail',
        host: 'smtp.aol.com',
        port: 465,
        auth: {
         user: 'jacobmaughan@aol.com',
         pass: 'Rememberkara40?'
    }
    });

    transporter.sendMail({
        from: 'jacobmaughan@aol.com',
        to: 'jacobmaughan@aol.com',
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