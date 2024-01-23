import nodemailer from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config();


const { name, email, message } = JSON.parse();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
    },
});

const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: 'New Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
};


transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email' + error.response }),
        };
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent: ' + info.response }),
        };
    }
});


