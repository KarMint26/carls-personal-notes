import React from "react";

export default function Button({ className, handlerClick, iconBtn, contentBtn }) {
  return (
    <React.Fragment>
      <div
        className={className}
        onClick={handlerClick}
      >
        {iconBtn}
        {contentBtn}
      </div>
    </React.Fragment>
  );
}
