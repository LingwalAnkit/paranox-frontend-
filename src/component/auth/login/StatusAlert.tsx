// components/StatusAlert.tsx
interface StatusAlertProps {
  message: string;
  type: "error" | "success";
}

export const StatusAlert: React.FC<StatusAlertProps> = ({ message, type }) => {
  const baseClasses = "p-4 rounded-lg border flex items-center space-x-2";
  const typeClasses = {
    error: "bg-red-50 text-red-700 border-red-100",
    success: "bg-green-50 text-green-700 border-green-100",
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <span className="text-sm">{message}</span>
    </div>
  );
};
