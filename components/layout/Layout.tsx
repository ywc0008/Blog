import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutHeader />
      {children}
      <LayoutFooter />
    </>
  );
}
