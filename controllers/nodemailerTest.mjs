import nodemailer from 'nodemailer';

// Transporter is going to be an object that is able to send mail. Learn more about transporter here.

// transport contains configuration. But in this example, we are passing object directly.

let partnerManagerEmail;

partnerManagerEmail = "glim@globalization-partners.com";

const transporter = nodemailer.createTransport({
  service : "hotmail",
  auth : {
      user : "gp_partner_app@outlook.com",
      pass : "Partner_notifications2022!"
  }
})

const options = {
  from: "gp_partner_app@outlook.com",
  to : partnerManagerEmail,
  subject: "You have a new GP Partner Request!",
  text: "test doge wow",
}

export default function nodemailerTesting(){transporter.sendMail(options, function(err, info){
  if (err){
    console.log(err);
    return;
  }
  console.log(info.response);
})}
