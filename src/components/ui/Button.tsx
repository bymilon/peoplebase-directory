import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    // Determine classes based on variants
    const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    let variantClasses = "";
    if (variant === 'primary') {
      variantClasses = "bg-sky-500 text-white border border-sky-600 shadow-sm hover:bg-sky-400 active:bg-sky-600 focus:ring-sky-500 dark:focus:ring-offset-slate-950";
    }
    
    let sizeClasses = "";
    if (size === 'sm') {
      sizeClasses = "px-4 py-1.5 text-sm";
    } else if (size === 'md') {
      sizeClasses = "px-6 py-[9px] text-[15px]"; 
    } else if (size === 'lg') {
      sizeClasses = "px-8 py-3 text-base";
    }

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
