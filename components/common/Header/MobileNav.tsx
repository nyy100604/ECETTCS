import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import Image from "next/image";

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          {" "}
          <AlignRight size={34} />
        </SheetTrigger>
        <SheetContent side="left">
          <Image
            alt="Logo"
            src="/logo/Logo.png"
            width={80}
            height={80}
            priority
          />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
