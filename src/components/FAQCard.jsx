import React from "react";

const FAQCard = ({ Question, Answer }) => {
  return (
    <div tabindex="0" class="collapse collapse-arrow bg-violet-200 rounded-box">
      {/* <input type="checkbox" /> */}
      <div class="collapse-title text-lg font-semibold">{Question}</div>
      <div class="collapse-content">
        <p>{Answer}</p>
      </div>
    </div>
  );
};

export default FAQCard;
