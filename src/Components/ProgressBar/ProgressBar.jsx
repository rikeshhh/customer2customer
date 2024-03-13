import React from "react";

const ProgressBar = ({rate}) => {
  return (
    <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
      <div className="h-1 bg-text-color" style={{ width: `${rate}%` }}></div>
    </div>
  );
};

export default ProgressBar;
