// src/pages/FAQPage.tsx  (or wherever you keep your pages)
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
// import { Link } from 'next/link'; // Uncomment if using Next.js

import { Helmet } from 'react-helmet-async';

import { faqData } from '../component/FQA/faqData';     

export default function FAQPage() {
  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | VIYAGOO</title>
        <meta
          name="description"
          content="Find answers to common questions about VIYAGOO's corporate transportation, employee transport, EV fleet, airport transfers, and more."
        />
      </Helmet>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            Frequently Asked Questions
          </h1>

          <p className="text-center text-lg text-gray-600 mb-12">
            <Link to="/" className="text-blue-600 hover:underline font-medium">
              ← Back to Home
            </Link>
          </p>

          {/* All 13 FAQs displayed here */}
          <FAQAccordion items={faqData} />
        </div>
      </section>
    </>
  );
}