import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import ClientLoader from '@/components/ClientLoader';
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import BackgroundGradientAnimationDemo from '@/components/background-gradient-animation-demo';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'TechHub - Premium Tech Products',
  description: 'Discover amazing tech products with instant loading',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="bg-slate-900 text-white">
        <ClientLoader />
        <Navigation />
        {children}
      </body>
    </html>
  );
}