interface ResponseSectionProps {
  response: string;
}

export function ResponseSection({ response }: ResponseSectionProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Answer</h3>
      <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
        {response}
      </div>
    </div>
  );
}
