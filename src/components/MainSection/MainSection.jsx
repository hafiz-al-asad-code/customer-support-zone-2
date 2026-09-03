import React from "react";
import CustomerTickets from "../CustomerTickets/CustomerTickets";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const MainSection = ({ ticketsPromise }) => {
  return (
    <div className="max-w-[1440px] mx-auto lg:grid grid-cols-12 gap-8">
      <div className="col-span-9">
        <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
      </div>

      <div className="col-span-3 space-y-[40px] mt-[50px] md:mt-[80px] lg:mt-0">
        <TaskStatus></TaskStatus>
        <ResolvedTask></ResolvedTask>
      </div>
    </div>
  );
};

export default MainSection;
