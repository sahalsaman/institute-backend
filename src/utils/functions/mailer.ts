const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bazilkoolath7777@gmail.com ',
    pass: 'blgv fbrv lrvt aizv'
  }
});

export const mailer = (reviever_email:any,subject:any,text: any):any => {
    text=text+'\n\n Best regards,\n\n [Your_Name]\n [Your_Contact_Information]'
    let mailOptions = {
        from: 'bazilkoolath7777@gmail.com ',
        to: reviever_email,
        subject: subject,
        text: text,
        html:''
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
}