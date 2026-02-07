// // Utility functions for formatting and calculations

// /**
//  * Format currency with Nigerian Naira symbol
//  */
// export const formatCurrency = (amount, currency = '₦') => {
//     return `${currency}${amount.toLocaleString('en-NG', {
//         minimumFractionDigits: 2,
//         maximumFractionDigits: 2,
//     })}`;
// };

// /**
//  * Format large numbers with abbreviations (K, M, B)
//  */
// export const formatLargeNumber = (num) => {
//     if (num >= 1000000000) {
//         return (num / 1000000000).toFixed(1) + 'B';
//     }
//     if (num >= 1000000) {
//         return (num / 1000000).toFixed(1) + 'M';
//     }
//     if (num >= 1000) {
//         return (num / 1000).toFixed(1) + 'K';
//     }
//     return num.toString();
// };

// /**
//  * Get status badge color classes
//  */
// export const getStatusColor = (status) => {
//     const statusColors = {
//         Submitted: 'bg-blue-50 text-blue-700 border-blue-200',
//         Shortlisted: 'bg-amber-50 text-amber-700 border-amber-200',
//         Interviewed: 'bg-purple-50 text-purple-700 border-purple-200',
//         Rejected: 'bg-red-50 text-red-700 border-red-200',
//         Completed: 'bg-green-50 text-green-700 border-green-200',
//     };
//     return statusColors[status] || 'bg-gray-50 text-gray-700 border-gray-200';
// };

// /**
//  * Calculate days until or since a date
//  */
// export const getDaysFromNow = (dateString) => {
//     const date = new Date(dateString.split('/').reverse().join('-'));
//     const now = new Date();
//     const diffTime = date - now;
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays;
// };

// /**
//  * Format date to readable string
//  */
// export const formatDate = (dateString) => {
//     const date = new Date(dateString.split('/').reverse().join('-'));
//     return date.toLocaleDateString('en-GB', {
//         day: 'numeric',
//         month: 'short',
//         year: 'numeric',
//     });
// };

// /**
//  * Generate greeting based on time of day
//  */
// export const getGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return 'Good morning';
//     if (hour < 18) return 'Good afternoon';
//     return 'Good evening';
// };

// /**
//  * Truncate text with ellipsis
//  */
// export const truncateText = (text, maxLength) => {
//     if (text.length <= maxLength) return text;
//     return text.substring(0, maxLength) + '...';
// };


// Utility functions for formatting and helpers

import clsx from 'clsx';

// Merge className strings with clsx
export function cn(...inputs) {
    return clsx(inputs);
}

// Format currency with Nigerian Naira
export function formatCurrency(amount, currency = '₦') {
    const formatted = new Intl.NumberFormat('en-NG', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);

    return `${currency}${formatted}`;
}

// Get status badge styling
export function getStatusStyles(status) {
    const styles = {
        Submitted: 'bg-blue-50 text-blue-700 border-blue-200',
        Shortlisted: 'bg-amber-50 text-amber-700 border-amber-200',
        Interviewed: 'bg-purple-50 text-purple-700 border-purple-200',
        Rejected: 'bg-red-50 text-red-700 border-red-200',
        Completed: 'bg-green-50 text-green-700 border-green-200',
    };

    return styles[status] || 'bg-gray-50 text-gray-700 border-gray-200';
}

// Format date string
export function formatDate(dateString) {
    const [day, month, year] = dateString.split('/');
    const date = new Date(year, month - 1, day);

    return new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }).format(date);
}

// Calculate completion percentage color
export function getCompletionColor(percentage) {
    if (percentage === 100) return 'text-green-600';
    if (percentage >= 50) return 'text-blue-600';
    return 'text-gray-400';
}

// Truncate text
export function truncate(text, length = 50) {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
}