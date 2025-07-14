const nodemailer = require("nodemailer");

async function sendEmail(email, otp) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
      },
    });

    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>OTP Verification</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
          <div style="text-align: center; padding-top: 30px;">
            <h1 style="color: blue; margin: 0;">
              Your OTP Verification Code is
            </h1>
            <h1 style="color: red; margin-top: 20px;">
              ${otp}
            </h1>
          </div>
        </body>
      </html>
    `;

    const info = await transporter.sendMail({
      from: `"No Reply" <${process.env.AUTH_EMAIL}>`,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP Verification Code is ${otp}`,
      html: htmlTemplate,
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = { sendEmail };
