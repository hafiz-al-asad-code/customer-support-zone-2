import React from "react";
import CustomerTickets from "../CustomerTickets/CustomerTickets";

const MainSection = ({ ticketsPromise }) => {
  return (
    <div className="max-w-[1440px] mx-auto lg:grid grid-cols-12 gap-8">
      <div className="col-span-9">
        <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
      </div>

      <div className="col-span-3 border-2 border-green-500 h-[500px]">
        right
      </div>
    </div>
  );
};

export default MainSection;
