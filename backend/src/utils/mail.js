import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: 'vodanh11397@gmail.com',
        pass: 'seagdquzoagkqhqp'
    }
});

export const sendMailUtil = (data) => {
    const { to, username, password } = data;
    const mailOptions = {
        from: 'vodanh11397@gmail.com',
        to,
        subject: 'CARRENTAL ACCOUNT',
        text: `Username: ${username} Password: ${password}`
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                resolve(true);
            }
        });
    });
};
