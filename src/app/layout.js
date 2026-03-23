import { Inter, Playfair_Display } from "next/font/google";
import { ContactModalProvider } from "@/components/contact/contact-modal-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arabia Aesthetics",
  description:
    "Premium skincare, dermatology, and franchise opportunity platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ContactModalProvider>
          <div id="top">{children}</div>
        </ContactModalProvider>
      </body>
    </html>
  );
}
