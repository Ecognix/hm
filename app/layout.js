import "./globals.css";
import { SiteHeader, SiteFooter } from "../components/SiteShell";
import Assistant from "../components/Assistant";

export const metadata = {
  title: "HM Arena Multisports | Guwahati's place to play",
  description: "A new home for the game at HM Arena Multisports in Beharbari, Lalmati, Guwahati. Explore the turf and try the booking experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Assistant />
      </body>
    </html>
  );
}
