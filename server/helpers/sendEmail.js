const nodemailer = require("nodemailer");
async function sendEmail(email, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD,
    },
  });
  const info = await transporter.sendMail({
    from: process.env.AUTH_EMAIL, // sender address
    to: email, // list of receivers
    subject: "Ecommerce", // Subject line
    text: "Please Verify Your Account", // plain text body
    html: `<div>
      <h1 style="color: blue; text-align: center; padding-top: 20px">
        Sir, Your OTP Verification Code is
      </h1>
      <div>
        <h1
          style="
            color: white;
            width: 100px;
            background-color: red;
            text-align: center;
            margin-left: 330px;
          "
        >
        ${otp}
        </h1>
      </div>
    </div>`, // html body
  });
}

module.exports = { sendEmail };
