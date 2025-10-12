import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // ✅ Gmail transporter (example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // তোমার Gmail
        pass: process.env.EMAIL_PASS, // App Password (বিস্তারিত নিচে)
      },
    });

    // ✅ Email configuration
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `📩 New message from ${name}: ${subject}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
