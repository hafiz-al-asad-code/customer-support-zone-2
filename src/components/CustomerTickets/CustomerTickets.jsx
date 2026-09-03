import React, { use } from "react";
import CustomerTicketsCard from "../CustomerTicketsCard/CustomerTicketsCard";

const CustomerTickets = ({ ticketsPromise }) => {
  const ticketsData = use(ticketsPromise);

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Customer Tickets</h3>

      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {ticketsData.map((ticket) => (
          <CustomerTicketsCard
            key={ticket.id}
            ticket={ticket}
          ></CustomerTicketsCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
