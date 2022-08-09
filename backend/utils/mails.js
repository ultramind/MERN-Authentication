const nodemailer = require('nodemailer')

exports.mailTransport = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

//   Email template
exports.generateEmailTemplate = code => {
  const template = `<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div
        style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2"
      >
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a
              href=""
              style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600"
              >Authentication APP</a
            >
          </div>
          <p style="font-size:1.1em">Hi,</p>
          <p>
            Thank you for choosing Your Brand. Use the following OTP to complete
            your Sign Up procedures. OTP is valid for 5 minutes
          </p>
          <h2
            style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;"
          >
            ${code}
          </h2>
          <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div
            style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300"
          >
            <p>Your Brand Inc</p>
            <p>1600 Amphitheatre Parkway</p>
            <p>California</p>
          </div>
        </div>
      </div>
    </body>
  </html>
  `
  return template
}

exports.generateWelcomeEmailTemplate = name => {
  const template = `<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div
        style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2"
      >
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a
              href=""
              style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600"
              >Authentication APP</a
            >
          </div>
          <p style="font-size:1.1em">Hi ${name},</p>
          <p>
            You are highly welcome Your account has been verified
          </p>
          <p style="font-size:0.9em;">Regards,<br />Your Brand</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div
            style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300"
          >
            <p>Your Brand Inc</p>
            <p>1600 Amphitheatre Parkway</p>
            <p>California</p>
          </div>
        </div>
      </div>
    </body>
  </html>
  `
  return template
}
