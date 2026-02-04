import "./globals.css";
import { Motto } from '@/components/motto';

export const metadata = {
  title: "LisboaUX",
  description: "The User Experience Meetup in Lisboa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased `}
      >
        {children}
        <Motto />
      </body>
    </html>
  );
}
