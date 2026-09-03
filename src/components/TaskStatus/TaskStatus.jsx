import React from "react";

const TaskStatus = () => {
  return (
    <div>
      <h3 className="text-2xl text-[#34485A] font-semibold mb-4">
        Task Status
      </h3>
      {/* <p className="text-[#627382]">Select a ticket to add to Task Status</p> */}

      <div className="p-4 rounded-[4px] bg-white">
        <p className="text-[18px] font-medium text-[#001931] mb-4">
          Payment Failed - Card Declined
        </p>
        <button className="font-semibold text-white bg-[#02A53B] py-3 rounded-[4px] w-full">
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskStatus;
