import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; // Using Inter for a clean look similar to CoreUI's default
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'MediTrack Lite', // Updated title
  description: 'Hospital Management Application', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Toaster /> {/* Add Toaster for notifications */}
      </body>
    </html>
  );
}
