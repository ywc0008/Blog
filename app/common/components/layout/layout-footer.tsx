import { Link } from "react-router";

export default function LayoutFooter() {
  return (
    <footer className="bg-c-gray text-white  ">
      <div className="flex flex-col items-center max-w-[980px] mx-auto px-[22px]">
        <nav className="w-full grid grid-cols-3 py-4 text-black">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/travel">Travel</Link>
          <Link to="/about">About</Link>
        </nav>
        <div>{/* 소셜 미디어 링크 */}</div>
        <div className="w-full mx-auto border-t border-c-footer-border py-4 text-gray-500">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
