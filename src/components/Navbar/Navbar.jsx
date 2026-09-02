import { Menu } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white py-[17.5px]">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-3 lg:px-0">
        {/* left */}
        <div className="flex gap-[12px] items-center">
          {/* dropdown */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="border border-gray-300 rounded-[4px] p-1"
            >
              <Menu />
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li className="text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-[4px]">
                <a>+ New Ticket</a>
              </li>
            </ul>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-[#130B2D] cursor-pointer">
            CS — Ticket System
          </h1>
        </div>

        {/* right */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Changelog</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Download</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <button className="font-semibold text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-[12px] px-4 rounded-[4px] cursor-pointer">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
