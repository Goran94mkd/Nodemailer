const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');

let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'ws-gen-11@outlook.com', 
        pass: 'ws-gen-edinaeset'
    }
});

transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath: './views/'
}));


let mailOptions = {
    from: 'ws-gen-11@outlook.com', 
    to: 'ws-gen-11@outlook.com', 
    subject: 'Nodemailer - Test',
    text: 'It works!!',
    template: 'index',
    context: {
        name: 'WS-gen-11'
    } 
};

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log(`${err.message}`);
    }
    console.log('Email sent!!!');
});