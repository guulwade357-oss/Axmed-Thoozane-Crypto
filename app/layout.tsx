import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {default:'Thoozane Crypto Trader | Crypto Education Academy',template:'%s | Thoozane Crypto Trader'},
  description:'International-level cryptocurrency education in crypto fundamentals, technical analysis, TradingView, risk management, blockchain and practical market skills.',
  keywords:['cryptocurrency education','crypto trading education','technical analysis course','TradingView course','crypto risk management','blockchain education'],
  metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000'),
  openGraph:{title:'Thoozane Crypto Trader',description:'Master crypto. Understand the market. Trade with knowledge.',type:'website',siteName:'Thoozane Crypto Trader'},
  robots:{index:true,follow:true},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
