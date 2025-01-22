// app/api/form/route.ts
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Zod schema for form validation
const contactSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters long' }),
});

// POST request handler
export async function POST(req: NextRequest) {
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Wrong method used.' }, { status: 405 });
    }

    try {
        const { name, email, message } = contactSchema.parse(await req.json());
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
 
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `Contact Form Submission From ${name}`,
            text: message,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Failed to send message", error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 400 });
    }
}
