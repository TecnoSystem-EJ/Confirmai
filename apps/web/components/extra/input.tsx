interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="block font-semibold mb-2 text-black">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          bg-gray-200
          rounded-xl
          px-4 py-3
          outline-none
          text-black
          placeholder:text-gray-500
          focus:ring-2
          focus:ring-red-500
        "
      />
    </div>
  );
}