const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASS,
    },
  })
  
  exports.handler = function (event, context, callback) {
  
  
    transporter.sendMail(
      {
        from: `"Nathan" ${process.env.MAIL}`,
        to: 'amelie.subileau85@gmail.com',
        subject: "🐇",
        html: `m3ukpba6hlr7ebiyqavimbrjl3mpzzfvbg64ibo6gjktkvrur6ngejyd`,
      },
      (error, info) => {
        if (error) {
          console.log(error)
          callback(error)
        } else {
          console.log(info)
  
          callback(null, {
            statusCode: 200,
            body: "Regarde tes mails.",
          })
        }
      }
    )
  }