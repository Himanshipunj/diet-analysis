interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function LoadingSpinner({ 
  message = "Loading...", 
  size = 'md' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="text-center p-4">
      <div 
        className={`inline-block animate-spin rounded-full border-b-2 border-blue-600 ${sizeClasses[size]}`}
      />
      {message && (
        <p className="mt-2 text-gray-600">{message}</p>
      )}
    </div>
  );
}