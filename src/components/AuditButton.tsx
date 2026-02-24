"use client";

const GHL_BOOKING_URL =
  "https://api.leadconnectorhq.com/widget/booking/tnWattFiELBGpctlleU8";

interface AuditButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function AuditButton({ className, children }: AuditButtonProps) {
  return (
    <a
      href={GHL_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
