import localFont from "next/font/local";
import Sidebar from "./sidebar";
import ToasterClient from "./toasterclient";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex">
          <Sidebar/>
          <main className="flex-1 md:ml-20 lg:ml-60 p-8">{children}</main>
        </div>
        <ToasterClient/>
      </body>
    </html>
  );
}
