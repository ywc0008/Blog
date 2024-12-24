import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutHeader />
      <main className="max-w-[980px] mx-auto p-4">{children}</main>
      <LayoutFooter />
    </>
  );
}
