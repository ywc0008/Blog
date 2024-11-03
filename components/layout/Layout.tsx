import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutHeader />
      <main className="max-w-[980px] mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {children}
      </main>
      <LayoutFooter />
    </>
  );
}
