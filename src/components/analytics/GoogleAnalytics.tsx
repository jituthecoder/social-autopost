import React from 'react';
import Script from 'next/script';
import { SITE_CONFIG } from '@/config/seo.config';

export function GoogleAnalytics() {
  const gaId = SITE_CONFIG.googleAnalyticsId;

  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
