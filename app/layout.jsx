import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-blog";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-blog/style.css";

export const metadata = {
  title: "The Orange Byte",
};

export default async function RootLayout({ children }) {
  const banner = <Banner storageKey=""></Banner>;

  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: "#0f172a", light: "#fefce8" }} />
      <body>
        <Layout banner={banner}>
          <Navbar pageMap={await getPageMap()}>
            <Search />
            <ThemeSwitch />
          </Navbar>

          {children}

          <Footer>
            <abbr title="" style={{ cursor: "help" }}></abbr>{" "}
            {new Date().getFullYear()} © HZ-9000.
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
