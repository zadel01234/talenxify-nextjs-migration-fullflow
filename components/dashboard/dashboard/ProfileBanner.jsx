'use client';

import { AlertCircle } from 'lucide-react';
import Button from '@/components/dashboard/ui/button';

export default function ProfileBanner({ percentage, onComplete }) {
    if (percentage >= 100) return null;

    return (
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border border-blue-100 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {percentage}% of your profile is completed.
                            </h3>
                            <p className="text-sm text-gray-700">
                                Complete your profile to unlock job applications. A complete profile
                                increases your chances of getting noticed and hired.
                            </p>
                        </div>

                        <Button onClick={onComplete} className="whitespace-nowrap">
                            Complete Profile
                        </Button>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white rounded-full h-2 border border-blue-200">
                        <div
                            className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}