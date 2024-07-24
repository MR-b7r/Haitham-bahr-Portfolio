import React from "react";

const MagicButton = ({
  disabled,
  type,
  variant,
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  disabled: boolean;
  type?: "button" | "reset" | "submit";
  variant: string;
  title?: string;
  icon: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <>
      {variant === "primary" && (
        <button
          type={type}
          className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] ${otherClasses}`}
          onClick={handleClick}
          disabled={disabled}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
          </span>
        </button>
      )}
      {variant === "secondary" && (
        <button
          type={type}
          className={`inline-flex h-12 animate-shimmer items-center justify-center bg-[linear-gradient(110deg,#ffffff20,45%,#1e2631,55%,#ffffff20)] bg-[length:200%_100%] text-sm font-medium transition-colors p-4 text-[1.35rem] cursor-pointer text-white/60 ${otherClasses}`}
        >
          {icon}
        </button>
      )}
    </>
  );
};

export default MagicButton;
