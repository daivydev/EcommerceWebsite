import React from "react";

export default function ButtonComponent({
  padding,
  border,
  outline,
  color,
  title,
  witdh,
  height,
  callback,
  ...rest
}) {
  // const classname = `w-[${witdh}] `;
  return (
    <button
      className={
        "mt-3 outline-1 w-[240px] py-2 rounded-sm hover:bg-blue-100 outline-blue-500 text-blue-600 cursor-pointer m-auto"
      }
      onClick={callback}
    >
      {title}
    </button>
  );
}
