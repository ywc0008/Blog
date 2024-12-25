"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "../ui/input";

export default function SearchDialog() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    router.push(`/search?query=${search}`);
    setSearch("");
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.altKey) && e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <SearchIcon /> 검색
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>검색하기</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Input
            placeholder="검색어를 입력해주세요."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={handleSearch}>검색</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Alt(Cmd) + Enter</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
}
