import { Cairo, Playfair_Display } from "next/font/google";
import { ContactModalProvider } from "@/components/contact/contact-modal-provider";
import "./globals.css";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} ${playfair.variable}`}>
        <ContactModalProvider>
          <div id="top">{children}</div>
        </ContactModalProvider>
      </body>
    </html>
  );
}
