// apps/web/components/ui/button.tsx

import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "lg" | "default";
}

export function Button({
  className = "",
  children,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const variants = {
    default: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-red-500 text-red-400 hover:bg-red-500/10",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md transition ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
