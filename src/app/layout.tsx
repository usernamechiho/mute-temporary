import "./_css/global.css";
import SideNavigation from "./_modules/_components/SideNavigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="flex px-2">
        <SideNavigation />

        {children}
      </body>
    </html>
  );
}
