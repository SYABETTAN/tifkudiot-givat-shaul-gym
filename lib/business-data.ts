export const businessData = {
  slug: "tifkudiot-givat-shaul",
  name: "תיפקודיות",
  fullName: "מכון כושר בגבעת שאול - תיפקודיות",
  tagline: "מכון כושר בגבעת שאול",
  type: "מכון כושר / אימון פונקציונלי",
  description:
    "תיפקודיות הוא מכון כושר בגבעת שאול בירושלים, עם דגש על אימון פונקציונלי, תנועה, כוח ויציבות. הדגמת אתר ראשונית על בסיס מידע ציבורי.",
  address: {
    street: "מרכז ספיר",
    neighborhood: "גבעת שאול",
    city: "ירושלים",
    postalCode: "9546112",
    full: "מרכז ספיר, גבעת שאול, ירושלים, 9546112",
    searchQuery: "מרכז ספיר, ירושלים, 9546112",
  },
  phone: {
    display: "054-489-9332",
    tel: "0544899332",
    international: "+972544899332",
  },
  whatsapp: {
    url: "https://wa.me/972544899332",
    label: "שליחת WhatsApp",
  },
  directions: {
    url: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("מרכז ספיר, ירושלים, 9546112"),
    label: "ניווט למכון",
  },
  demo: {
    isPrivateDemo: true,
    bannerText: "הדגמה פרטית — לא אתר רשמי",
    preparedBy: "Prepared by שמואל אביטן",
  },
  areaServed: ["ירושלים", "גבעת שאול", "מרכז ספיר"],
} as const;

export type BusinessData = typeof businessData;
