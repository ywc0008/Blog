import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Github } from "../social-icons/icons";
import Link from "next/link";

export function AboutPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="font-medium text-md text-black">
          About
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div>
            <h4>wzz</h4>
            <p>프론트엔드 개발자입니다.</p>
          </div>
          <div className="w-fit">
            <Link target="_blank" href="https://github.com/ywc0008">
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
