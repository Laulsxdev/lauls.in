declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// log the pageview with their URL
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// log specific events happening.
export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Utility tracking functions based on standard GA4 events
export const trackEngagement = (label: string) => {
  event({ action: "engagement", category: "General", label });
};

export const trackFormSubmit = (formName: string) => {
  event({ action: "form_submit", category: "Form", label: formName });
};

export const trackPhoneClick = (phoneNumber: string) => {
  event({ action: "phone_click", category: "Contact", label: phoneNumber });
};

export const trackEmailClick = (email: string) => {
  event({ action: "email_click", category: "Contact", label: email });
};

export const trackDownload = (fileName: string) => {
  event({ action: "download", category: "Resource", label: fileName });
};

export const trackOutboundClick = (url: string) => {
  event({ action: "outbound_click", category: "Navigation", label: url });
};

export const track404 = (url: string) => {
  event({ action: "404_error", category: "Error", label: url });
};
