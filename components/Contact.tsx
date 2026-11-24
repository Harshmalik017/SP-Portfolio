'use client';
import { useEffect, useState } from 'react';
import { Mail, Phone } from 'lucide-react';
type ContactProps = { emailB64: string; phoneB64: string };

export default function Contact({ emailB64, phoneB64 }: ContactProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  useEffect(() => { setEmail(atob(emailB64)); }, [emailB64]);
  return (
    <>
      {email ? <a className="contact-row" href={'mailto:' + email}><Mail size={16} /> <span>{email}</span></a> : <span className="contact-row"><Mail size={16} /> <span>Contact details</span></span>}
      {phone
        ? <a className="contact-row" href={'tel:' + phone.replace(/\s/g, '')}><Phone size={16} /> <span>{phone}</span></a>
        : <span className="contact-row"><Phone size={16} /> <button type="button" className="rev" onClick={() => setPhone(atob(phoneB64))}>Reveal phone</button></span>}
    </>
  );
}
