export function DevOpsLoader() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        
        {/* Inner DevOps icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-primary animate-pulse"
          >
            {/* DevOps infinity symbol */}
            <path 
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 5-5v3h4v4h-4v3z" 
              fill="currentColor"
            />
            <path 
              d="M14 7v3h4v4h-4v3l5-5-5-5z" 
              fill="currentColor" 
              opacity="0.7"
            />
          </svg>
        </div>
        
        {/* Pulsing dots */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary/60 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>
    </div>
  )
}
