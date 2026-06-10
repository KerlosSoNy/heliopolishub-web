import type { Metadata } from 'next';
import './globals.css';
import ClientLoader from '@/components/ClientLoader';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import FloatingDockDemo from '@/components/floating-dock-demo';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Heliopolis Hub | Premium Diecast Cars & Scale Models Egypt',
  description: 'The ultimate marketplace to buy, sell, and trade premium diecast cars in Egypt. Discover rare 1:64, 1:43, and 1:18 scale models from top brands.',
  keywords: [
    'diecast cars egypt',
    'scale models cairo',
    'buy sell diecast egypt',
    'mini gt egypt',
    'kaido house egypt',
    'inno64 egypt',
    'model cars egypt',
    'heliopolis hub'
  ],
  openGraph: {
    title: 'Heliopolis Hub | Premium Diecast Cars & Scale Models Egypt',
    description: 'The ultimate marketplace to buy, sell, and trade premium diecast cars in Egypt. Find rare scale models from top brands.',
    url: 'https://heliopolishub.com',
    siteName: 'Heliopolis Hub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heliopolis Hub - Diecast Store Egypt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heliopolis Hub | Premium Diecast Cars & Scale Models Egypt',
    description: 'The ultimate marketplace to buy, sell, and trade premium diecast cars in Egypt.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="relative text-white bg-black max-w-screen overflow-hidden">
        <ClientLoader />
        <FloatingDockDemo />
        <div className="z-5">
          {children}
        </div>
      </body>
    </html>
  );
}