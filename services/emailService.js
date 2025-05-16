// services/emailService.js
import emailjs from "emailjs-com";
import { useRuntimeConfig } from "#imports";

export const sendEmail = (formData) => {
  const config = useRuntimeConfig().public;
  const SERVICE_ID = config.emailjsServiceId;
  const TEMPLATE_ID = config.emailjsTemplateId;
  const USER_ID = config.emailjsUserId;

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID);
};