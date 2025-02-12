import resend from "../config/resend";
import {  EMAIL_SENDER, NODE_ENV } from "../constants/env";

type Params = {
  to: string;
  subject: string;
  text: string;
  html: string;
};



// export const sendMail = async (
//     {
//         to , subject , text , html 
//     }:Params
// ) => 
//     await resend.emails.send({
//       from: "onboarding@resend.dev",
//       to : "delivered@resend.dev",
//       subject: "",
//       text : "",
//       html : "",
//     });

// export const sendVerificationEmail = async (to: string) => {


// const getFromEmail = () =>
//   NODE_ENV === "development" ? "onboarding@resend.dev" : EMAIL_SENDER;

// const getToEmail = (to: string) =>
//   NODE_ENV === "development" ? "delivered@resend.dev" : to;



const getToEmail = (to : string ) => 
  NODE_ENV === "development"? "delivered@resend.dev" : to;


const getFromEmail = () => 
  NODE_ENV === "development" ? "onboarding@resend.dev" : EMAIL_SENDER;


export const sendMail = async ({ to, subject, text, html }: Params) =>
  await resend.emails.send({
    from: getFromEmail(),
    to : getToEmail(to),
    subject,
    text,
    html,
  });
  // delivered@resend.dev