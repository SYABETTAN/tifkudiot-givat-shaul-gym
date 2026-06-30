"use client";

import { businessData } from "@/lib/business-data";
import { cn } from "@/lib/utils";
import { MapPin, MessageCircle, Phone } from "lucide-react";

export function FloatingCTA() {
  const items = [
    {
      href: businessData.whatsapp.url,
      label: "WhatsApp",
      icon: MessageCircle,
      ariaLabel: "שליחת WhatsApp",
      className: "bg-[#25D366] text-white",
    },
    {
      href: `tel:${businessData.phone.tel}`,
      label: "התקשר",
      icon: Phone,
      ariaLabel: "התקשר עכשיו",
      className: "bg-blue text-white",
    },
    {
      href: businessData.directions.url,
      label: "ניווט",
      icon: MapPin,
      ariaLabel: "ניווט למכון",
      className: "bg-orange text-white",
    },
  ];

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy/95 backdrop-blur-xl md:hidden"
      role="navigation"
      aria-label="פעולות מהירות"
    >
      <div className="grid grid-cols-3 gap-1 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.ariaLabel}
            className={cn(
              "flex flex-col items-center justify-center gap-1 rounded-2xl py-3 text-xs font-semibold transition-opacity hover:opacity-90",
              item.className
            )}
          >
            <item.icon className="h-5 w-5" aria-hidden="true" />
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
