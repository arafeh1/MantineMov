import type { ReactNode } from 'react';
import Prov from './Prov';
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Prov>
          {children}
        </Prov>
      </body>
    </html>
  );
}