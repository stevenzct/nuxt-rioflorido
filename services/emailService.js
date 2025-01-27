// services/emailService.js
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_qar5ekb'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'template_qitqssd'; // Replace with your EmailJS template ID
const USER_ID = 'EKlHHPYK9MbXvKbmh'; // Replace with your EmailJS user ID

export const sendEmail = (formData) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID);
};