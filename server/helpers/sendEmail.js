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
    from: `"Ecommerce" <${process.env.AUTH_EMAIL}>`,
    to: email, // list of receivers
    subject: "Ecommerce-OTP", // Subject line
    text: "Please Verify Your Account", // plain text body
    html: `<div>
      <h1
        style="color: blue; text-align: center; padding-top: 30px";
      >
        Your OTP Verification Code is
      </h1>
      <div>
        <h1
          style="
            color: white;
            background-color: red;
            text-align: center;
            justify-items: center;
          "
        >
          ${otp}
        </h1>
      </div>
    </div>`, // html body
  });
}

module.exports = { sendEmail };
