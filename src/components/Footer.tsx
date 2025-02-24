"use client";
import { config } from "@/config";
import { Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Button } from "./ui/button";
import { Github } from "./icons";

export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 mb-12">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © {config.blog.copyright} {new Date().getFullYear()}
        </div>
        {/* <div className="text-xs text-muted-foreground hidden lg:block">
          <Link
            href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
          >
            Blog powered by wisp
          </Link>
        </div> */}
        <div className="flex items-center gap-[10px]">
          <Link href="/rss">
            <Rss className="h-5 w-5" />
          </Link>
          <Link href="https://github.com/ywc0008">
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
      {/* <div className="text-xs text-muted-foreground lg:hidden">
        <Link
          href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
        >
          Blog powered by wisp
        </Link>
      </div> */}
    </section>
  );
};
