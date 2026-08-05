"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function BookButton({
  calLink,
  className,
  children,
}: {
  calLink: string;
  className?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("init", { origin: "https://app.cal.eu" });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#bf6a4a" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
