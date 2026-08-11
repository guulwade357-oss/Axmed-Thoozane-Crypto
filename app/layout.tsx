import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'Axmed Thoozane Crypto',description:'Professional cryptocurrency trading and investing education platform.',metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
