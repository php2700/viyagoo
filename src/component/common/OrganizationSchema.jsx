import { Helmet } from "react-helmet-async";

export const OrganizationSchema = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VIYAGOO",
    "url": "https://www.viyagoo.com",
    "logo": "https://www.viyagoo.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/viyagoo",
      "https://www.facebook.com/viyagoo",
      "https://twitter.com/viyagoo"
    ],
     "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6364185516",
      "contactType": "customer service",
      "areaServed": "IN"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
    </Helmet>
  );
};
