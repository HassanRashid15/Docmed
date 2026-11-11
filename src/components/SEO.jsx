import React from 'react';
import { Helmet } from 'react-helmet';
import { SITE } from '../constants/siteInfo';

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
  author = SITE.legalName,
  section = 'Healthcare',
  tags = [],
}) => {
  const siteUrl = SITE.url;
  const defaultImage = `${siteUrl}/images/docmed-og-image.jpg`;

  const fullTitle = title || SITE.legalName;
  const fullDescription = description || SITE.description;
  const fullKeywords =
    keywords ||
    'medical center, healthcare, hospital, doctors, emergency care, cardiology, neurology, ophthalmology, dentistry, medical services, patient care, healthcare provider';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage || defaultImage;

  const defaultOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: SITE.legalName,
    alternateName: SITE.name,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: SITE.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone.display,
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [SITE.social.facebook, SITE.social.twitter, SITE.social.linkedin],
  };

  return (
    <Helmet key={title}>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0181f5" />
      <meta name="msapplication-TileColor" content="#0181f5" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="language" content="English" />
      <meta name="classification" content="Healthcare, Medical Services" />
      <meta name="category" content="Healthcare" />
      <link rel="canonical" href={fullCanonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || SITE.legalName} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE.legalName} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@docmed" />
      <meta name="twitter:creator" content="@docmed" />

      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={SITE.name} />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
      <script type="application/ld+json">{JSON.stringify(defaultOrganizationSchema)}</script>
    </Helmet>
  );
};

export default SEO;
