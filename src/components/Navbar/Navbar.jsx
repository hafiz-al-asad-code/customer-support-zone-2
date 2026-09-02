import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white py-[17.5px]">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        {/* left */}
        <div>
          <h1 className="text-2xl font-bold text-[#130B2D]">
            CS — Ticket System
          </h1>
        </div>

        {/* right */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li>Home</li>
            <li>FAQ</li>
            <li>Changelog</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
          </ul>
          <button className="font-semibold text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-[12px] px-4 rounded-[4px]">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
