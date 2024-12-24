import Link from "next/link";
// import { HiOutlineSearch } from "react-icons/hi";

export default function LayoutHeader() {
  return (
    <header className="w-full max-w-[980px] mx-auto p-4">
      <nav className="flex justify-between items-center gap-8">
        <Link href="/">Home</Link>
        <div className="flex items-center gap-8">
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          {/* <HiOutlineSearch size={20} className="cursor-pointer" /> */}
        </div>
      </nav>
    </header>
  );
}
