import React from "react";

const FAQCard = ({ Question, Answer }) => {
  return (
    <div
      tabindex="0"
      class="collapse collapse-arrow border border-base-100 bg-violet-200 rounded-box"
    >
      {/* <input type="checkbox" /> */}
      <div class="collapse-title text-lg font-semibold">{Question}</div>
      <div class="collapse-content">
        <p>{Answer}</p>
      </div>
    </div>
  );
};

export default FAQCard;
