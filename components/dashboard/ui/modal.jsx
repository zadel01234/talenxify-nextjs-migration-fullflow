'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';
import { cn } from '@/lib/dashboard-utils';

export default function Modal({ isOpen, onClose, children, className }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className={cn(
                    'relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto',
                    'animate-fadeIn',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}

export function ModalHeader({ children, onClose }) {
    return (
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div className="flex-1">{children}</div>
            {onClose && (
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>
            )}
        </div>
    );
}

export function ModalBody({ children, className }) {
    return <div className={cn('px-6 py-4', className)}>{children}</div>;
}

export function ModalFooter({ children, className }) {
    return (
        <div
            className={cn(
                'flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100',
                className
            )}
        >
            {children}
        </div>
    );
}