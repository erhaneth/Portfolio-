import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { generateEmailContent } from "../../components/template/email";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a transporter using SMTP

    dotenv.config();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Send email
      const emailContent = generateEmailContent(name, email, message);
      let info = await transporter.sendMail({
        from: `"Your Portfolio Website" <${process.env.EMAIL_USER}>`,
        to: "gumusucb21@gmail.com",
        ...emailContent,
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
