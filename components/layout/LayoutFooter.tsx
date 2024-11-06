import Link from "next/link";

export default function LayoutFooter() {
  return (
    <footer className="bg-footer-gray text-white ">
      <div className="flex flex-col items-center max-w-[980px] mx-auto px-[22px]">
        <nav className="w-full grid grid-cols-3 py-4 text-black">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <div>{/* 소셜 미디어 링크 */}</div>1
        <div className="w-full mx-auto border-t border-gray-600 py-4 text-gray-500">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
