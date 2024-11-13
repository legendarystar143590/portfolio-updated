'use client'

import Link from "next/link";
import DarkmodeToggle from "./DarkModeToggle";
import Typography from "./Typography";

const items = [
  {
    name: "Service",
    href: "/#service",
  },
  {
    name: "Team",
    href: "/#team",
  },
  {
    name: "Features",
    href: "/#feature",
  },
  {
    name: "Gallery",
    href: "/#gallery",
  },

  {
    name: "Contact",
    href: "/#contact",
  },
];

const Header = () => {
  return (
    <>
      <div className="flex justify-center p-5 sticky top-0 bg-slate-800 dark:bg-slate-100 z-20">
        <div className="flex flex-col gap-4 w-3/5 items-center md:flex-row md:justify-between duration-300 md:delay-100">
          <Typography className="items-center text-sky-500 font-semibold" size="h4">
            <Link href="/#home">Dev_Squad</Link>
          </Typography>
          <div className="flex">
            <ul className="flex flex-row gap-5 list-none">
              {
                items.map((item, key) => (
                  <Link key={key} href={item.href}><Typography size="paragraph" className="text-sm text-white transition-colors duration-300 dark:text-slate-800 hover:text-pink-600 ">{item.name}</Typography></Link>
                ))
              }
            </ul>
          </div>
          <DarkmodeToggle />
        </div>

      </div>
    </>
  )
}

export default Header;