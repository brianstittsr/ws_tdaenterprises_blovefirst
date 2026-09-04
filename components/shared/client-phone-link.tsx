"use client";

import { Phone } from "lucide-react";

interface ClientPhoneLinkProps {
  phone: string;
  className?: string;
}

export function ClientPhoneLink({ phone, className }: ClientPhoneLinkProps) {
  const href = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <a href={href} className={className} aria-label={`Call ${phone}`}>
      <Phone className="h-4 w-4" />
      <span className="phone-text" data-phone={phone} aria-hidden="true" />
    </a>
  );
}
