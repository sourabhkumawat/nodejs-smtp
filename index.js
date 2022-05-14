// create transporter object with smtp server details
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'email-smtp.ap-south-1.amazonaws.com',
    port: 2587,
    auth: {
        user: 'AKIAT34NDO7HVBS7GSF6',
        pass: 'BLg6Ea62ebv3WPdXrBGL8z+zZDyzyI8I+CesfgyBIlXG'
    }
});

// send email

(async () => {
    await transporter.sendMail({
        from: 'deshraj.kumawat@flixstudio.io',
        to: 'deshraj.kumawat@flixstock.com',
        subject: 'Test Email Subject',
        html: '<h1>Example HTML Message Body</h1>'
    });
})();
