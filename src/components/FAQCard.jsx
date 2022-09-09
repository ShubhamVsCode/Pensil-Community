import React from "react";

const FAQCard = ({ Question, Answer }) => {
  return (
    <div
      tabIndex="0"
      className="collapse collapse-arrow bg-violet-200 rounded-box"
    >
      {/* <input type="checkbox" /> */}
      <div className="collapse-title text-lg font-semibold">{Question}</div>
      <div className="collapse-content">
        <p>{Answer}</p>
      </div>
    </div>
  );
};

export default FAQCard;
