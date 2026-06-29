import { cloudinary } from "@/utils/cloudinary";

export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Organization", "B2BBusiness"],
        "@id": "https://lauls.in/#organization",
        "name": "Lauls Private Limited",
        "description": "Logistics & Steel Handling, Ferro Alloys Distribution (TATA Steel authorized), and Railway Track Fastener Manufacturing.",
        "foundingDate": "1933",
        "founder": {
          "@type": "Person",
          "name": "Mr. SR Laul"
        },
        "url": "https://lauls.in",
        "logo": cloudinary("images/logo.png"),
        "image": cloudinary("images/slider/Banner.jpg"),
        "telephone": "+91-129-4098300",
        "email": "info@lauls.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "33-B, N.I.T.",
          "addressLocality": "Faridabad",
          "addressRegion": "Haryana",
          "postalCode": "121001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.3888",
          "longitude": "77.3175"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/10073868"
        ],
        "knowsAbout": [
          "Steel Logistics",
          "Ferro Alloys Distribution",
          "Railway Track Fasteners",
          "Electric Truck Transport",
          "Wire Rods and Steel Rounds"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Industrial Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Steel Logistics & Warehousing",
                "description": "WAREX GOLD certified handling of 1,000,000 MT of steel annually."
              }
            }
          ]
        }
      },
      {
        "@type": "Product",
        "name": "Railway Track Fastener - Fishplates",
        "image": cloudinary("images/below-slider/manufacturing.jpg"),
        "description": "High-durability RDSO approved Railway Fishplates.",
        "sku": "LAULS-FISHPLATE-01",
        "brand": {
          "@type": "Brand",
          "name": "Lauls Private Limited"
        },
        "manufacturer": {
          "@id": "https://lauls.in/#organization"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "124"
        }
      },
      {
        "@type": "Product",
        "name": "Elastic Rail Clips (ERC)",
        "image": cloudinary("images/below-slider/manufacturing.jpg"),
        "description": "RDSO approved Elastic Rail Clips for Indian Railways.",
        "sku": "LAULS-ERC-02",
        "brand": {
          "@type": "Brand",
          "name": "Lauls Private Limited"
        },
        "manufacturer": {
          "@id": "https://lauls.in/#organization"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "98"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://lauls.in/#webpage",
        "url": "https://lauls.in",
        "name": "Lauls Private Limited | Industrial Steel & EV Solutions",
        "isPartOf": {
          "@id": "https://lauls.in/#website"
        },
        "about": {
          "@id": "https://lauls.in/#organization"
        },
        "mentions": [
          { "@type": "Thing", "name": "Steel Logistics" },
          { "@type": "Thing", "name": "Ferro Alloys" },
          { "@type": "Thing", "name": "Railway Track Fasteners" },
          { "@type": "Thing", "name": "Electric Trucks" }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://lauls.in/#website",
        "url": "https://lauls.in",
        "name": "Lauls Private Limited",
        "publisher": {
          "@id": "https://lauls.in/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://lauls.in/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://lauls.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Logistics",
            "item": "https://lauls.in/logistics"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Products",
            "item": "https://lauls.in/products"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Distribution",
            "item": "https://lauls.in/distribution"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://lauls.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What logistics services does Lauls Private Limited provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide end-to-end logistics solutions, ensuring reliable supply chains and operational efficiency for massive industrial cargo, managing over 500,000 MT of transport annually."
            }
          },
          {
            "@type": "Question",
            "name": "Do you supply heavy alloy steel rounds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We operate extensive stockyards dedicated to distributing heavy alloy steel, precision tubes, and rounds to meet diverse industrial manufacturing requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Which ferro alloys do you trade and supply?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As the authorized distributor of TATA Steel Ferro Alloys & Minerals in Northern India, we supply high-quality ferro chrome, ferro manganese, and other essential minerals."
            }
          },
          {
            "@type": "Question",
            "name": "What is your approach to sustainable transport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are pioneering sustainable transport with our expanding fleet of electric trucks, significantly reducing carbon footprints."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
