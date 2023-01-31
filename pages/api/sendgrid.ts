// import sendgrid from "@sendgrid/mail";

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'mariamerkdev@gmail.com', // Change to your recipient
//   from: 'mariamerkdev@gmail.com', // Change to your verified sender
//   subject: 'Thank you for checking out my portfolio!',
//   text: 'I look forward to hearing from you.',
//   html: '<strong>Maria Mercado</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error: any) => {
//     console.error(error)
//   })

// import sendgrid from "@sendgrid/mail";

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// async function sendEmail(req, res) {
//   try {
//     await sendgrid.send({
//       to: "youremail@gmail.com", // Your email where you'll receive emails
//       from: "youremail@gmail.com", // your website email address here
//       subject: `[Lead from website] : ${req.body.subject}`,
//       html: '<strong>Maria Mercado</strong>',
//     });
//   } catch (error) {
//     // console.log(error);
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }

//   return res.status(200).json({ error: "" });
// }

// export default sendEmail;
import * as sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const sendEmail = async (req: any, res: any) => {
  try {
    await sgMail.send({
      to: "mmercadoac@gmail.com'",
      from: "mariamerkdev@gmail.com'",
      subject: `[Lead from website] : ${req.body.subject}`,
      html: '<strong>Maria Mercado</strong>',
    });
  } catch (error: unknown) {
    // console.log(error);
    if (error != null && typeof error === 'object' && 'statusCode' in error) {
      const statusCode = error.statusCode;
      return res.status(statusCode).json({ error: error });
    }
    return res.status(500).json({ error: error });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;


