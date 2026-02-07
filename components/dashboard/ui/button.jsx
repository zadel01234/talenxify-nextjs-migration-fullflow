'use client';

import { cn } from '@/lib/dashboard-utils';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    disabled,
    ...props
}) {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2';

    const variants = {
        primary: 'bg-primary hover:bg-primary-600 text-white shadow-sm disabled:bg-gray-300',
        secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 disabled:bg-gray-100',
        outline: 'border-2 border-gray-200 hover:border-gray-300 bg-white text-gray-900',
        ghost: 'hover:bg-gray-100 text-gray-700',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    return (
        <button
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                disabled && 'cursor-not-allowed opacity-50',
                className
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}