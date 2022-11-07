import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { generateWriteUp } from "../../utils/writeups";
import { createMail, getGmailService } from "./_gmail";


const handleMailingRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const secret = process.env.SECRET;
  const token = await getToken({ req, secret });
  console.log('token: ', token);
  const { writeup, phone, name, emails } = req.body;

  res.json('hello from sendmail');
  const mailContent = generateWriteUp(writeup, { name, phone });
  const mailAttachments = {
    filename: "Brochure.pdf",
    content: "https://drive.google.com/file/d/1hcuv7GdN1lBZwgE2diw0DNbh7FiG2ODc/view?usp=share_link"
  }
  const gmail = getGmailService({
    type: "authorized_user",
    client_id: process.env.GOOGLE_ID,
    client_secret: process.env.GOOGLE_SECRET,
    refresh_token: token?.refresh_token,
  }
  );

  const options = {
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
  return await gmail.users.messages.send({
    userId: "me",
    resource: {
      raw: rawMessage,
    },
  });
  // return "done";
}

export default handleMailingRequest;  