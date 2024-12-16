import "./_css/global.css";
import SideNavigation from "./_modules/_components/SideNavigation";
import { ThemeProvider } from "./_modules/_components/ThemeProvider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex px-4">
            <SideNavigation />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
