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
      variantClasses = `
        bg-gradient-to-b from-[#5FC3E0] to-[#4BAAC8] 
        text-white 
        border border-[#44A0BC]/80
        shadow-[0_2px_4px_rgba(0,0,0,0.06),inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-2px_2px_rgba(0,0,0,0.1)]
        hover:from-[#6DD2ED] hover:to-[#57BCD8]
        active:from-[#4BAAC8] active:to-[#5FC3E0] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)]
        focus:ring-[#5FC3E0] dark:focus:ring-offset-gray-950
        [text-shadow:0_1px_1px_rgba(0,0,0,0.1)]
      `.replace(/\s+/g, ' ').trim();
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
