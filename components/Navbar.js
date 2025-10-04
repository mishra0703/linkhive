"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const otherPages = ["/", "/generate"].includes(pathname);

  return ( <> {otherPages && ( <nav className="bg-white h-[10vh] w-[90%] rounded-full absolute top-10 left-1/2 -translate-x-1/2 flex justify-between items-center px-10 py-11">
          <Link href={"/"}>
            <div className="brand-name flex gap-3 items-center">
              <h1 className="poppins text-3xl font-medium cursor-pointer">
                LinkHive
              </h1>
              <img src="/logo.png" alt="LinkHive Logo" className="w-15 h-15" />
            </div>
          </Link>
          <div className="navlinks">
            <ul className="poppins flex gap-5 justify-center items-center text-xl font-medium">
              <li className="hover:bg-[#ededed]  p-4 rounded-xl transition-all ease-in-out duration-500 hover:cursor-pointer">
                About
              </li>
              <li className="hover:bg-[#ededed]  p-4 rounded-xl transition-all ease-in-out duration-500 hover:cursor-pointer">
                Learn
              </li>
              <li className="hover:bg-[#ededed]  p-4 rounded-xl transition-all ease-in-out duration-500 hover:cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:bg-[#ededed]  p-4 rounded-xl transition-all ease-in-out duration-500 hover:cursor-pointer">
                Terms & Condition
              </li>
            </ul>
          </div>
          <div className="buttons flex items-center gap-5">
            <button className="poppins bg-[#ededed] p-4 text-md font-medium rounded-xl">
              Log in
            </button>
            <button className="poppins text-white bg-[#1e2330] p-3 px-5 text-xl rounded-full ">
              Sign in
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
