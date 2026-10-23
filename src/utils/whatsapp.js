/**
 * Build a WhatsApp message from booking form data
 * @param {Object} formData - Form data object
 * @param {string} formData.name - Full name
 * @param {string} formData.phone - Phone number
 * @param {string} formData.service - Selected service
 * @param {string} formData.area - Area in Nairobi
 * @param {string} formData.date - Preferred date
 * @param {string} formData.message - Optional message
 * @returns {string} URL-encoded WhatsApp message
 */
export function buildWhatsAppMessage({ name, phone, service, area, date, message }) {
  const lines = [
    `*New Booking Request*`,
    ``,
    `*Name:* ${name}`,
    `*Phone:* ${phone}`,
    `*Service:* ${service}`,
    `*Area:* ${area}`,
    `*Preferred Date:* ${date}`,
  ];

  if (message && message.trim()) {
    lines.push(``);
    lines.push(`*Message:* ${message}`);
  }

  const text = lines.join('\n');
  return encodeURIComponent(text);
}
