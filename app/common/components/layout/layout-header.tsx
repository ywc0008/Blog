import { WordRotate } from "@/components/magicui/word-rotate";
import { useEffect, useState } from "react";
import { Link } from "react-router";

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
          <Link to="/" className="text-xl">
            <WordRotate words={["Wzz", "Blog"]} duration={3000} />
          </Link>
          <div className="flex items-center gap-8 font-medium text-md text-black">
            <Link to="/blog">Blog</Link>
            {/* <AboutPopover />
            <SearchDialog /> */}
            {/* <SearchDrawer /> */}
          </div>
        </nav>
      </div>
    </header>
  );
}
