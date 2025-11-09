interface ErrorDisplayProps {
  message: string;
  onDismiss?: () => void;
  type?: 'error' | 'warning' | 'info';
}

export default function ErrorDisplay({ 
  message, 
  onDismiss,
  type = 'error' 
}: ErrorDisplayProps) {
  const typeClasses = {
    error: 'bg-red-100 border-red-400 text-red-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
    info: 'bg-blue-100 border-blue-400 text-blue-700'
  };

  return (
    <div className={`border px-4 py-3 rounded mb-4 flex justify-between items-center ${typeClasses[type]}`}>
      <span>{message}</span>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="ml-4 text-xl leading-none hover:opacity-75"
          aria-label="Dismiss"
        >
          ×
        </button>
      )}
    </div>
  );
}