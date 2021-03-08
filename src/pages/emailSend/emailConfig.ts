import dotenv from 'dotenv';

dotenv.config();

const { REACT_APP_EMAILJS_USER_ID, REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID } = process.env;

const emailConfig = {
  userId: REACT_APP_EMAILJS_USER_ID,
  serviceId: REACT_APP_EMAILJS_SERVICE_ID,
  templateId: REACT_APP_EMAILJS_TEMPLATE_ID
}

export default emailConfig;