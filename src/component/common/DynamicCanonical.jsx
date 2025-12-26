
import React from "react";

export const DynamicCanonical = () => {
  if (typeof window === "undefined") return null;
  const canonicalUrl = window.location.href;

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
};
