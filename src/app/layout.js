import { Cairo, Playfair_Display } from "next/font/google";
import { ContactModalProvider } from "@/components/contact/contact-modal-provider";
import "./globals.css";
import { SiteNavbar } from "@/components/shared/site-navbar";
import { SiteFooter } from "@/components/shared/site-footer";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arbia Aesthetics",
  description:
    "Premium skincare, dermatology, and franchise opportunity platform.",
  icons: {
    icon: "/arviaData/arvia-logo-new2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} ${playfair.variable}`}>
        <ContactModalProvider>
          <SiteNavbar />
          <div id="top">{children}</div>
          <SiteFooter />
        </ContactModalProvider>
      </body>
    </html>
  );
}
