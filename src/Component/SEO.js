import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  publishedTime,
  modifiedTime,
  author = 'Docmed Medical Center',
  section = 'Healthcare',
  tags = []
}) => {
  const siteName = 'Docmed Medical Center';
  const siteUrl = 'https://docmed.com'; // Replace with your actual domain
  const defaultImage = `${siteUrl}/images/docmed-og-image.jpg`; // Replace with your actual OG image
  
  const fullTitle = title || siteName;
  const fullDescription = description || 'Docmed Medical Center - Your trusted healthcare partner providing exceptional medical care with compassion and excellence. Expert doctors, advanced technology, and 24/7 emergency services.';
  const fullKeywords = keywords || 'medical center, healthcare, hospital, doctors, emergency care, cardiology, neurology, ophthalmology, dentistry, medical services, patient care, healthcare provider';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage || defaultImage;

  return (
    <Helmet key={title}>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0181f5" />
      <meta name="msapplication-TileColor" content="#0181f5" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="classification" content="Healthcare, Medical Services" />
      <meta name="category" content="Healthcare" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || siteName} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@docmed" />
      <meta name="twitter:creator" content="@docmed" />
      
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Docmed" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Organization Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Docmed Medical Center",
          "alternateName": "Docmed",
          "url": siteUrl,
          "logo": `${siteUrl}/images/logo.png`,
          "description": "Leading healthcare provider offering comprehensive medical services including emergency care, cardiology, neurology, ophthalmology, and more.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1055 Arthur ave Elk Groot, 67",
            "addressLocality": "New Palmas",
            "addressRegion": "South Carolina",
            "postalCode": "29150",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-234-678-9108-99",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.facebook.com/docmed",
            "https://www.twitter.com/docmed",
            "https://www.linkedin.com/company/docmed"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Medical Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Emergency Care"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Cardiology"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Neurology"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;


