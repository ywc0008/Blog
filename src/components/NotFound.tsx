"use client";

import { Button } from "@/components/ui/button";
import { Undo } from "lucide-react";
import Link from "next/link";

export const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-2xl">페이지를 찾을 수 없습니다.</p>

      <Button asChild className="mt-4">
        <Link href="/">
          <Undo className="mr-2 h-4 w-4" /> 메인으로
        </Link>
      </Button>
    </div>
  );
};
