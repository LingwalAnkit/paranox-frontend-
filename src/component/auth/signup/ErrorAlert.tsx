// components/ErrorAlert.tsx
interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => {
  return (
    <div className="bg-red-100 text-red-600 p-3 rounded-lg text-center">
      {message}
    </div>
  );
};
