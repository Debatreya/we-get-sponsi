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

  const mailContent = generateWriteUp(writeup, { name: token?.name, phone });
  const mailAttachments = {
    filename: "Techspardha'23 Prospectus .pdf",
    path: process.env.PROSPECTUS_LINK,
    contentType: 'application/pdf',
  }
  const gmail = getGmailService({
    type: "authorized_user",
    client_id: process.env.GOOGLE_ID,
    client_secret: process.env.GOOGLE_SECRET,
    refresh_token: token?.refresh_token,
  }
  );
  try {
    await Promise.all(emails.map(async (email: string) => {
      const options = {
        to: email,
        cc: cc.join(', '),
        replyTo: token?.email,
        subject: "Regarding Sponsorship for Techspardha'23 @NITKurukshetra",
        html: mailContent,
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

    res.json("Emails Sent Successfully");
  } catch (err) {
    res.json({ error: err });
  }
}

export default handleMailingRequest;  