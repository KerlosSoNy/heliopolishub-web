import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import localFont from "next/font/local";
import AOSInit from "@/lib/AOSInit";
import AnimationWrapper from "@/lib/AnimationWrapper";
import Footer from "@/components/Footer";
import NewsletterModal from "@/components/NewsletterModal";
import NotificationToast from "@/components/NotificationToast";
import Header from "@/components/Header/Header";

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/poppins/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ]
})

export const metadata: Metadata = {
  title: 'Heliopolis Hub | Premium Diecast Cars & Scale Models Egypt',
  description: 'The ultimate marketplace to buy, sell, and trade premium diecast cars in Egypt. Discover rare 1:64, 1:43, and 1:18 scale models from top brands.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
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
    url: 'https://heliopoliscore.com/images/withShadow.png',
    siteName: 'Heliopolis Hub',
    images: [
      {
        url: './favicon.ico',
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
    images: ['./favicon.ico'],
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body suppressHydrationWarning className={poppins.className}>
        <AOSInit />
        <Header />
        <div className="flex flex-col items-center">
          <AnimationWrapper>
            {children}
          </AnimationWrapper>
        </div>
        <Footer />
        <NotificationToast />
        <NewsletterModal />
      </body>
    </html>
  );
}
