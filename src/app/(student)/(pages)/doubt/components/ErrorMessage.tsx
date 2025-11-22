interface ErrorMessageProps {
  error: string;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border border-red-300 text-red-800 px-4 py-3 rounded-md">
      <p className="text-sm">{error}</p>
    </div>
  );
}
