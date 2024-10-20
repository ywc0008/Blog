import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { HiOutlineSearch } from "react-icons/hi";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full max-w-7xl mx-auto p-4">
      <Link href="/">Home</Link>
      <div className="flex items-center gap-8">
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <HiOutlineSearch size={20} className="cursor-pointer" />
      </div>
    </header>
  );
}
