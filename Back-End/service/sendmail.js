
// // const nodemailer = require("nodemailer");
// // let sendMail=(receiverMail)=> {
// //   console.log(receiverMail)
// //     // let transporter = nodemailer.createTransport({
      
// //     //     host: "smtp.gmail.com",
// //     //     port: 465,
// //     //     secure: true,
// //     //  service: 'gmail',
// //     //     // port: 587,
// //     //     // secure: false, // true for 465, false for other ports
// //     //     auth: {
// //     //       type: "login",
// //     //       user: process.env.MAIL_USER, // generated ethereal user 
// //     //       pass: process.env.MAIL_PASS, // generated ethereal password
// //     //     },
// //     //   });
// //     //   console.log('receiverMail')
// //     //   // send mail with defined transport object
// //     //   let info =  transporter.sendMail({
// //     //     from: '"Fashion Sport Shop 👻" <quangthong1610@gmail.com>', // sender address
// //     //     to: receiverMail, // list of receivers
// //     //     subject: "Hello ✔", // Subject line
// //     //     text: "Hello world?", // plain text body 
// //     //     html: "<b>Hello world?</b>", // html body
// //     //   });
// //     //   console.log("Message sent: %s", info.messageId);
// //     //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// //     var smtpTransport = nodemailer.createTransport({
// //       service: 'gmail',
// //       auth: {
// //           user: process.env.MAIL_USER,
// //           password: process.env.MAIL_PASS
// //       },
// //       secure: false,
// //       tls: {
// //         rejectUnauthorized: false
// //       }
// //   });
 
// //  var mailOptions = {
// //        from: environment.smtp.email,
// //        to: receiverMail, 
// //        subject: 'Subject',
// //        html: "Mail content here."
// //    }
 
// //  smtpTransport.sendMail(mailOptions, function(error, response){
// //       console.log(error)
// //    });
// // }
// // module.exports = {
// //     sendMail:sendMail
// // }


// // async..await is not allowed in global scope, must use a wrapper
// // const nodemailer = require("nodemailer");

// // // async..await is not allowed in global scope, must use a wrapper
// // async function main() {
// //   // Generate test SMTP service account from ethereal.email
// //   // Only needed if you don't have a real mail account for testing
// //   let testAccount = await nodemailer.createTestAccount();

// //   // create reusable transporter object using the default SMTP transport
// //   let transporter = nodemailer.createTransport({
// //     host: "smtp.ethereal.email",
// //     port: 587,
// //     secure: false, // true for 465, false for other ports
// //     auth: {
// //       user: testAccount.user, // generated ethereal user
// //       pass: testAccount.pass, // generated ethereal password
// //     },
// //   });

// //   // send mail with defined transport object
// //   let info = await transporter.sendMail({
// //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
// //     to: "bar@example.com, baz@example.com", // list of receivers
// //     subject: "Hello ✔", // Subject line
// //     text: "Hello world?", // plain text body
// //     html: "<b>Hello world?</b>", // html body
// //   });

// //   console.log("Message sent: %s", info.messageId);
// //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// //   // Preview only available when sending through an Ethereal account
// //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// // }

// // main().catch(console.error);

// //const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// // const sendMail=(receiverMail)=> {
// //   // Generate test SMTP service account from ethereal.email
// //   // Only needed if you don't have a real mail account for testing
// //   let testAccount = await nodemailer.createTestAccount();

// //   // create reusable transporter object using the default SMTP transport
// //   let transporter = nodemailer.createTransport({
// //     host: "smtp.gmail.com",
// //     port: 465,
// //     secure: true,
// //     service: 'gmail', // true for 465, false for other ports
// //     auth: {
// //       user: process.env.MAIL_USER, // generated ethereal user 
// //       pass: process.env.MAIL_PASS, // generated ethereal password
// //     },
// //   });

// //   // send mail with defined transport object
// //   let info = await transporter.sendMail({
// //     from: '"Fashion Sport Shop 👻" <quangthong1610@gmail.com>', // sender address
// //     to: receiverMail, // list of receivers
// //     subject: "Hello ✔", // Subject line
// //     text: "Hello world?", // plain text body 
// //     html: "<b>Hello world?</b>", // html body
// //   });
// //   console.log("Message sent: %s", info.messageId);
// //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// //   // Preview only available when sending through an Ethereal account
// //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// // }

// // //sendMail().catch(console.error);
// // module.exports = {
// //       sendMail:sendMail
// //   }
// "use strict";
// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// const sendMail=async (receiverMail)=>{
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: process.env.MAIL_USER, // generated ethereal user 
      
//       pass: process.env.MAIL_PASS, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: receiverMail, // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// sendMail().catch(console.error);
// module.exports = {
//       sendMail:sendMail
//   }
const nodemailer = require("nodemailer");


const nodejsMail =async(email)=>{
  const transporter =nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth:{
      user:"nqthongcnsg@gmail.com",
      pass:"brlfropekmeantqz",
    }
  })
 let options;
  if(email.type == 1){
    options={
      from:'"Fashion Sport Shop 👻" <nqthongcnsg@gmail.com>',
      to:email.email,
      subject: "Hóa đơn Fashion Sport Shop ", // Subject line
      text: "Hello world?", // plain text body 
      html: `
      <div><b>Xin chào ${email.name}</b></div>
      <div><b>Đơn hàng ${email.mahd} của bạn đã được tạo thành công</b></div>
      <div><b>Địa chỉ giao hàng : ${email.address} </b></div>
      <div><b>Ngày tạo hóa đơn : ${email.dateStart} </b></div>
      <div><b>Ngày giao dự kiến : ${email.dateend} </b></div>
      <div><b>Xin chân thành cảm ơn bạn đã mua hàng ở cửa hàng chúng tôi </b></div>
  
  
      `, 
    
    }
  }else if(email.type == 2){
    options={
      from:'"Fashion Sport Shop 👻" <nqthongcnsg@gmail.com>',
      to:email.email,
      subject: "Đặt lại mật khẩu ", // Subject line
      text: "Hello world?", // plain text body 
      html: `
      <div><b>Xin chào </b></div>
      <div><b>Mật khẩu của bạn đã được cài lại</b></div>
      <div><b>Mật khẩu mới của bạn là : 123456 </b></div>
      <div><b>Xin chân thành cảm ơn bạn đã ghé thăm cửa hàng chúng tôi </b></div>
  
  
      `, 
    
    }
  }
  transporter.sendMail(options, function(err,info){ 
    if(err)
    {
      console.log(err);
      return;
    }
    console.log("Sent: "+info.response)
  })
}
module.exports = {
  nodejsMail:nodejsMail
    }
