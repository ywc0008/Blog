"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// import { HiOutlineSearch } from "react-icons/hi";

export default function LayoutHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 bg-white w-full max-w-[980px] mx-auto p-4 transition-opacity duration-200
      ${isScrolled ? "bg-opacity-80 backdrop-blur-sm" : "bg-opacity-100"}`}
    >
      <nav className="flex justify-between items-center gap-8 font-bold">
        <Link href="/">Home</Link>
        <div className="flex items-center gap-8 font-medium">
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          {/* <HiOutlineSearch size={20} className="cursor-pointer" /> */}
        </div>
      </nav>
    </header>
  );
}
