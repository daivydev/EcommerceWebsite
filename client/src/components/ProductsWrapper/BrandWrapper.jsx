import React from "react";

export default function BrandWrapper({ children }) {
  return (
    <div className="p-4 bg-white rounded-lg text-sm grid grid-cols-6 gap-3">{children}</div>
  );
}
