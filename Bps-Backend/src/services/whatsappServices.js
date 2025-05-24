// src/services/whatsappServices.js
import twilio from 'twilio';
import configObj from '../config/config.js';

const { twilio: config } = configObj;
const client = twilio(config.sid, config.authToken);

export const sendWhatsAppMessage = async (to, message) => {
    const toNumber = to.startsWith('whatsapp:') ? to : `whatsapp:${to}`;
    return await client.messages.create({
        body: message,
        from: config.from,
        to: toNumber,
    });
};
