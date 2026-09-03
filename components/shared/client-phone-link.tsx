"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

interface ClientPhoneLinkProps {
  phone: string;
  className?: string;
}

export function ClientPhoneLink({ phone, className }: ClientPhoneLinkProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className={className}>
        <Phone className="h-4 w-4" />
        {phone}
      </span>
    );
  }

  const href = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <a href={href} className={className}>
      <Phone className="h-4 w-4" />
      {phone}
    </a>
  );
}
