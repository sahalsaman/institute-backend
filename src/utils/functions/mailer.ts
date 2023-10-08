const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bazilkoolath7777@gmail.com ',
    pass: 'ctxf rizq vmvu kblq'
  }
});

export const mailer = (reviever_email:any,subject:any,text: any,html?:any):any => {
    text=text+'\n\n Best regards,\n\n [Your_Name]\n [Your_Contact_Information]'
    let mailOptions = {
        from: 'bazilkoolath7777@gmail.com ',
        to: reviever_email,
        subject: subject,
        text: text,
        html:html
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return error
        } else {
            console.log('Email sent: ' + info.response);
            return 'Email sent: ' + info.response
        }
      });
 
}

export const email_text={
    admin_invitation_subject:"Invitation to Admin Dashboard",
    admin_invitation:"Hello [reciever-name],\n\n We are excited to have you on board! You have been granted administrative access to [Your Platform/Website Name]. As an administrator, you will be able to manage content, users, and other critical aspects of the platform.",
    student_invitation_subject:"Invitation to Access Instistute Online Portal ",
    student_invitation:"Dear [reciever-name], \n\n We're excited to welcome you to Instistute App! With this platform, you'll be able to access course materials, collaborate with classmates, and receive important updates.",
    teacher_invitation_subject:"Invitation to Access Instistute Online Portal",
    teacher_invitation:"Dear [reciever-name],\n\n I hope this email finds you well.\n\n We are excited to announce that Instistute online portal is now live! This platform is designed to enhance our communication, resource sharing, and overall educational experience for both our educators and students.",
    student_registration_subject:"",
    student_registration:"",
    set_password_html:"<div style='height: 100%; margin: 0; font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center;'><a href='http://localhost:4200/set-password/[user-id]' target='_blank'><button style='padding: 10px 20px; border: none; background-color: #007BFF; color: white; cursor: pointer; border-radius: 5px; font-size: 16px; transition: background-color 0.3s;'>Set Password</button></a></div>"
}