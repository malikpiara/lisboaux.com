import "./globals.css";

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
      </body>
    </html>
  );
}
