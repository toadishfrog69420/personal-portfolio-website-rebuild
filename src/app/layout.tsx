import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s',
  },
  description: "Sean Yang Personal Portfolio",
  openGraph: {
    title: 'Sean Yang Personal Portfolio',
    description: 'Sean Yang Personal Portfolio',
    url: "",
    siteName: "Sean Yang Personal Porfolio",
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} text-black bg-white dark:text-white dark:bg-black`}>
      <body className='antialiased'>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
