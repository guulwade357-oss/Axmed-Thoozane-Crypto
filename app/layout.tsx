import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thoozane Crypto Trader | Crypto Education Academy',
  description: 'A professional cryptocurrency education platform for structured learning in crypto, trading, technical analysis and risk management.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
