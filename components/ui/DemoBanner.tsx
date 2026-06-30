"use client";

import { businessData } from "@/lib/business-data";

export function DemoBanner() {
  if (!businessData.demo.isPrivateDemo) return null;

  return (
    <div
      className="relative z-[70] border-b border-amber/20 bg-graphite/95 px-4 py-2 text-center text-sm text-concrete/90 backdrop-blur-sm"
      role="status"
    >
      <p className="font-medium text-amber">{businessData.demo.bannerText}</p>
      <p className="mt-0.5 text-xs text-concrete/60">
        {businessData.demo.preparedBy}
      </p>
    </div>
  );
}
