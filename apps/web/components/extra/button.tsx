interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
     className={`
  px-6
  py-3
  rounded-2xl
  text-white
  font-semibold
  bg-gradient-to-t
  from-[#980C0C]
  to-[#F00000]
  hover:opacity-90
  transition-all
  duration-200
  cursor-pointer
  ${className}
`}    >
      {children}
    </button>
  );
}