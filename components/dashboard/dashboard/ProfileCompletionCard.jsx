'use client';

import Card, { CardBody, CardTitle } from '@/components/dashboard/ui/card';
import Button from '@/components/dashboard/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function ProfileCompletionCard({ profileData, onCompleteProfile }) {
    const { percentage, fields } = profileData;

    return (
        <Card>
            <CardBody>
                <CardTitle className="mb-6">Profile Completion</CardTitle>

                {/* Overall Progress */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">
                            {percentage}% Complete
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                </div>

                {/* Individual Fields */}
                <div className="space-y-3 mb-6">
                    {fields.map((field, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">{field.name}</span>
                            <div className="flex items-center gap-2">
                                {field.percentage === 100 ? (
                                    <div className="flex items-center gap-1 text-green-600">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span className="text-xs font-semibold">100%</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <div className="w-12 h-1.5 bg-gray-200 rounded-full">
                                            <div
                                                className="bg-primary h-1.5 rounded-full"
                                                style={{ width: `${field.percentage}%` }}
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-gray-500 w-8 text-right">
                                            {field.percentage}%
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Complete Profile Button */}
                {percentage < 100 && (
                    <Button onClick={onCompleteProfile} className="w-full">
                        Complete Profile
                    </Button>
                )}
            </CardBody>
        </Card>
    );
}