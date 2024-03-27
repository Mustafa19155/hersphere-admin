import React from "react";
import moment from "moment";

const Promotions = ({ promotions }) => {
  return (
    <div>
      <p className="text-xl font-bold">Promotions</p>
      <div>
        {promotions.map((promotion) => (
          <div>
            <p>{promotion.category}</p>
            <p>{promotion.description}</p>
            <p>{promotion.requirements.likes} Likes</p>
            <p>{promotion.requirements.likes}Comments</p>
            <p>{promotion.requirements.days} Days</p>
            <p>${promotion.transactionID?.amount}</p>
            <p>{promotion.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
