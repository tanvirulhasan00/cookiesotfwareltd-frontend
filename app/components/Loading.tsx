import React from "react";

const Loading = () => {
  return (
    <div
      className="page-loading fixed top-0 bottom-0 left-0 right-0 z-[99999] flex items-center justify-center bg-primary-light-1 dark:bg-primary-dark-1 opacity-100 visible pointer-events-auto transition-opacity duration-300"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label="Loading..."
    >
      <div className="grid-loader relative inline-block h-20 w-20 box-border">
        {/* Top row */}
        <div className="absolute top-2 left-2 h-4 w-4 rounded-full bg-[#3d63dd] animate-[grid-loader_1.2s_linear_infinite]"></div>
        <div className="absolute top-2 left-8 h-4 w-4 rounded-full bg-[#3d63dd] animate-[grid-loader_1.2s_linear_infinite] animation-delay-[-0.4s]"></div>
        <div className="absolute top-2 left-14 h-4 w-4 rounded-full bg-[#3d63dd] animate-[grid-loader_1.2s_linear_infinite] animation-delay-[-0.8s]"></div>

        {/* Middle row */}
        <div className="absolute top-8 left-2 h-4 w-4 rounded-full bg-[#3d63dd] animate-[grid-loader_1.2s_linear_infinite] animation-delay-[-0.4s]"></div>
        <div className="absolute top-8 left-8 h-4 w-4 rounded-full bg-[#3d63dd] animate-[grid-loader_1.2s_linear_infinite] animation-delay-[-0.8s]"></div>
        <div className="absolute top-8 left-14 h-4 w-4 rounded-full bg-[#3d63dd] animate-[grid-loader_1.2s_linear_infinite] animation-delay-[-1.2s]"></div>

        {/* Bottom row */}
        <div className="absolute top-14 left-2 h-4 w-4 rounded-full bg-[#3d63dd] animate-[grid-loader_1.2s_linear_infinite] animation-delay-[-0.8s]"></div>
        <div className="absolute top-14 left-8 h-4 w-4 rounded-full bg-[#3d63dd] animate-[grid-loader_1.2s_linear_infinite] animation-delay-[-1.2s]"></div>
        <div className="absolute top-14 left-14 h-4 w-4 rounded-full bg-[#3d63dd] animate-[grid-loader_1.2s_linear_infinite] animation-delay-[-1.6s]"></div>
      </div>
    </div>
  );
};

export default Loading;
