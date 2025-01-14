"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import SearchDialog from "./SearchDialog";
// import SearchDrawer from "./SearchDrawer";

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
      className={`sticky top-0 z-50 bg-white w-full p-4 transition-opacity duration-200 ${
        isScrolled ? "bg-opacity-80 backdrop-blur-sm" : "bg-opacity-100"
      }`}
    >
      <div className="w-full max-w-[980px] mx-auto">
        <nav className="flex justify-between items-center gap-8 font-bold">
          <Link href="/" className="text-xl">
            Home
          </Link>
          <div className="flex items-center gap-8 font-medium">
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <SearchDialog />
            {/* <SearchDrawer /> */}
          </div>
        </nav>
      </div>
    </header>
  );
}
