import {Resend} from 'resend';
import {ContactTemplate} from "@/components/emails/contact";
import {NextResponse} from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request, response:NextResponse) {

    const {email, message} = await request.json();

    if(!email || !message) {
        return Response.error()
    }

       const data = await resend.emails.send({
           from: 'Acme <onboarding@resend.dev>',
           to: ["pluviauxweb@gmail.com"],
           subject: "Juiher Nature - Nouveau message de la page contact",
           react: ContactTemplate({
               email,
               message,
           }) as React.ReactElement,
       });

    return Response.json(data)
}
