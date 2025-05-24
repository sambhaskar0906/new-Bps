
import { sendWhatsAppMessage } from '../services/whatsappServices.js';

export const sendMessage = async (req, res) => {
    try {
        const { message, to } = req.body;
        await sendWhatsAppMessage(to, message);
        res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error("Error in sendMessage:", error);
        res.status(500).json({ success: false, message: "Failed to send message" });
    }
};

export const sendBookingConfirmation = async (req, res) => {
    const { to, booking } = req.body;

    if (!to || !booking) {
        return res.status(400).json({ error: 'Phone number and booking details are required.' });
    }

    try {
        const {
            firstName,
            lastName,
            senderLocality,
            fromCity,
            fromState,
            senderPincode,
            receiverLocality,
            toCity,
            toState,
            toPincode,
            grandTotal,
            bookingId,
            items = [],
        } = booking;

        const totalWeight = items.reduce((sum, item) => sum + (item.weight || 0), 0);

        const formattedMessage =
            `*📦 Booking Confirmation*

Dear *${firstName} ${lastName}*,

Your booking with *Booking ID: ${bookingId}* has been successfully created.

*From Address:*
${senderLocality}, ${fromCity}, ${fromState}, ${senderPincode}

*To Address:*
${receiverLocality}, ${toCity}, ${toState}, ${toPincode}

*Product Details:*
• Weight: ${totalWeight} kg
• Amount: ₹${grandTotal}

Thank you for choosing our service.

_BharatParcel Team_`;

        const response = await sendWhatsAppMessage(to, formattedMessage);
        res.status(200).json({ success: true, sid: response.sid });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
};

