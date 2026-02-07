'use client';

import { cn } from '@/lib/dashboard-utils';

export default function Card({ children, className, ...props }) {
    return (
        <div
            className={cn(
                'bg-white rounded-xl shadow-sm border border-gray-100',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className, ...props }) {
    return (
        <div
            className={cn('px-6 py-4 border-b border-gray-100', className)}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardBody({ children, className, ...props }) {
    return (
        <div className={cn('px-6 py-4', className)} {...props}>
            {children}
        </div>
    );
}

export function CardTitle({ children, className, ...props }) {
    return (
        <h3
            className={cn('text-lg font-bold text-gray-900', className)}
            {...props}
        >
            {children}
        </h3>
    );
}