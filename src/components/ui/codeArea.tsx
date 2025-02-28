"use client";

import { FileIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Terminal } from "../magicui/terminal";

interface CodeAreaProps {
  code: string;
  language: string;
  lightTheme: string;
  darkTheme: string;
}

export function CodeArea({
  code,
  language,
  lightTheme = "github-light",
  darkTheme = "github-dark",
}: CodeAreaProps) {
  const { theme, systemTheme } = useTheme();
  const [highlighted, setHighlighted] = useState("");

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const selectedTheme = currentTheme === "dark" ? darkTheme : lightTheme;

    async function highlightCode() {
      try {
        const { codeToHtml } = await import("shiki");
        const before = await codeToHtml(code, {
          lang: language,
          theme: selectedTheme,
        });
        setHighlighted(before);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlighted(`<pre>${code}</pre>`);
      }
    }
    highlightCode();
  }, [theme, systemTheme, code, language, lightTheme, darkTheme]);

  const renderCode = (code: string, highlighted: string) => {
    if (highlighted) {
      return (
        <div
          className="h-full overflow-auto bg-background font-mono text-md [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      );
    } else {
      return (
        <pre className="h-full overflow-auto break-all bg-background p-4 font-mono text-md text-foreground">
          {code}
        </pre>
      );
    }
  };
  return (
    <Terminal className="max-w-full">
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative w-full overflow-hidden rounded-md border border-border">
          <div className="relative">
            <div>{renderCode(code, highlighted)}</div>
          </div>
        </div>
      </div>
    </Terminal>
  );
}
