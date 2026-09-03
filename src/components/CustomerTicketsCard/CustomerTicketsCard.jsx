import React from "react";
import statusImg from "../../assets/Ellipse-22 .png";
import calenderImg from "../../assets/ri_calendar-line.png";

const CustomerTicketsCard = ({ ticket }) => {
  return (
    <div className="p-4 rounded-[4px] bg-white">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-[#001931] text-[18px]">
          {ticket.title}
        </h4>

        <div className="flex items-center gap-[6px] py-[4px] px-[12px] bg-[#B9F8CF] rounded-full">
          <img src={statusImg} className="w-[16px] h-[16px]" alt="" />
          <span className="font-medium text-[#0B5E06]">{ticket.status}</span>
        </div>
      </div>

      <p className="text-[#627382] mt-2 mb-4">{ticket.description}</p>

      <div className="flex justify-between items-center">
        {/* left */}
        <div className="flex items-center gap-[16px]">
          <p className="text-[14px] font-medium text-[#627382]">#{ticket.id}</p>
          <p
            className={`text-[14px] font-medium  ${ticket.priority === "HIGH" ? "text-[#F83044]" : ticket.priority === "MEDIUM" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}
          >
            {ticket.priority} PRIORITY
          </p>
        </div>

        {/* right */}
        <div className="flex items-center gap-[16px]">
          <p className="text-[14px] text-[#627382]">{ticket.customer}</p>
          <div className="flex items-center gap-2">
            <img src={calenderImg} alt="" />
            <p className="text-[14px] text-[#627382]">{ticket.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicketsCard;
