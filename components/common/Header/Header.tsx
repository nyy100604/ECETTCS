import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { NavigationMenuDemo } from "./Nav";

const Header = () => {
  return (
    <header className="w-full bg-bg shadow-xl fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-12 py-6 lg:px-10 ">
        {/* desktop nav */}
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-x-2 lg:gap-x-5">
            <div className="relative w-16 h-16 lg:w-24 lg:h-24">
              <Image
                src="/logo/Logo.png"
                alt="websiteLogo"
                fill
                priority
                quality={100}
              />
            </div>

            <h1 className="text-xl font-bold lg:text-2xl">
              <div>幼兒教育師資</div> 培育認證系統
            </h1>
          </Link>{" "}
          <div className="hidden lg:flex xl:items-center gap-x-16">
            {/* <Nav
              containerStyles="flex"
              listStyles="flex items-center gap-x-2 text-2xl font-medium bg-grey hover:bg-slate-200 "
            /> */}
            <NavigationMenuDemo />
            <Button
              size="lg"
              className="active:ring-offset-[2px] active:ring-[4px] active:ring-secondary duration-300 "
            >
              登 入
            </Button>
          </div>
        </div>
        {/* mobile nav */}
        <div className="cursor-pointer lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
