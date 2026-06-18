import type { Metadata } from 'next';
import './globals.css';
import ClientLoader from '@/components/ClientLoader';
import localFont from 'next/font/local'
import Navbar from '@/components/navbar/Navbar';
import AOSInit from '@/lib/AOSInit';
import AnimationWrapper from '@/lib/AnimationWrapper';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={poppins.className}>
        <div id="modal-root"></div>
        <AOSInit />
      <ClientLoader />
        <div
          id="main-content"
          className="w-full overflow-x-hidden bg-foundation-black-500"
        >
          <Navbar />
          <AnimationWrapper>
            {children}
          </AnimationWrapper>
        </div>
      </body>
    </html>
  );
}