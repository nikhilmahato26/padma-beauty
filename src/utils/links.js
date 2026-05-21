import { BUSINESS } from '../constants/site'

export function waLink(text = '') {
  const msg = text ? `?text=${encodeURIComponent(text)}` : ''
  return `https://wa.me/${BUSINESS.whatsapp}${msg}`
}

export function telLink() {
  return `tel:${BUSINESS.phoneRaw}`
}

export function mailLink() {
  return `mailto:${BUSINESS.email}`
}

export function buildAppointmentMessage(data) {
  return `*New Appointment Request*
*Name:* ${data.name}
*Phone:* ${data.phone}
*Service:* ${data.service}
*Date:* ${data.date}
*Message:* ${data.message || '-'}`
}
