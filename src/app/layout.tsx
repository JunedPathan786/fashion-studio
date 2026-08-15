import type { Metadata } from 'next';
import { withBasePath } from '@/lib/basePath';
import './globals.css';

export const metadata: Metadata = {
  title: "FASHION STUDIO 47 | Premium Men's Clothing | Belapur (BK)",
  description:
    "FASHION STUDIO 47 - Style • Comfort • Confidence. Elevate your everyday with premium men's shirts, trousers, t-shirts, hoodies, watches, and accessories near Jhenda Chowk, Belapur (BK).",
  icons: {
    icon: withBasePath('/images/brand_logo_gold_1786715478587.jpg'),
  },
  openGraph: {
    title: 'FASHION STUDIO 47 | Premium Men\'s Clothing',
    description:
      "Style • Comfort • Confidence. Premium men's clothing studio in Belapur (BK), Maharashtra.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
