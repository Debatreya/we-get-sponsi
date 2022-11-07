import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { generateWriteUp } from "../../utils/writeups";
import { createMail, getGmailService } from "./_gmail";

const sendMail = async (gmail: any, message: string) => {
  await gmail.users.messages.send({
    userId: "me",
    resource: {
      raw: message,
    },
  });
}

const handleMailingRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const secret = process.env.SECRET;
  const token = await getToken({ req, secret });
  console.log('token: ', token);
  const { writeup, phone, name, emails, cc } = req.body;

  res.json('hello from sendmail');
  const mailContent = generateWriteUp(writeup, { name: token?.name, phone });
  const mailAttachments = {
    filename: "Techspardha'23 Prospectus .pdf",
    content: "https://www.dropbox.com/s/kw6ot4n05fr56wt/Techspardha%2723%20Prospectus.pdf?dl=0",
    contentType: 'application/pdf',
  }
  const gmail = getGmailService({
    type: "authorized_user",
    client_id: process.env.GOOGLE_ID,
    client_secret: process.env.GOOGLE_SECRET,
    refresh_token: token?.refresh_token,
  }
  );

  return await Promise.all(emails.map(async (email: string) => {
    const options = {
      to: email,
      cc: cc.join(', '),
      replyTo: token?.email,
      subject: "Hello From We-Get-Sponsi🚀",
      text: mailContent,
      // html: `<p>${mailContent}</p>`,
      attachments: mailAttachments,
      textEncoding: "base64",
      headers: [
        { key: "X-Application-Developer", value: "Yash Mittal" },
        { key: "X-Application-Version", value: "v1.0.0.2" },
      ],
    }
    const message = await createMail(options);
    return sendMail(gmail, message);
  }))

  /*const options = {
    to: "yami8b@gmail.com",
    cc: "techsavvyash@gmail.com, yaadonkabackup@gmail.com",
    replyTo: "yash_12012002@nitkkr.ac.in",
    subject: "Hello From We-Get-Sponsi🚀",
    text: "This email is sent from the command line",
    html: `<p>🙋🏻‍♀️  &mdash; This is a <b>test email</b> from my mailer.</p>`,
    attachments: mailAttachments,
    textEncoding: "base64",
    headers: [
      { key: "X-Application-Developer", value: "Yash Mittal" },
      { key: "X-Application-Version", value: "v1.0.0.2" },
    ],
  };
  const rawMessage = await createMail(options);
  return await sendMail(gmail, rawMessage);*/
  // return "done";
}

export default handleMailingRequest;  