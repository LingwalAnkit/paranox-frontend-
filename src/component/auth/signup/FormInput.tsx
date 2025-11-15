// components/FormInput.tsx
interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  minLength?: number;
  min?: string;
  className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  minLength,
  min,
  className = "",
}) => {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        min={min}
        className={`w-full px-4 py-3 text-black rounded-lg border ${
          error ? "border-red-500" : "border-gray-300"
        } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-gray-100 ${className}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
