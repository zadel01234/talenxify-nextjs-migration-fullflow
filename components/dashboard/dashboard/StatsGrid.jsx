'use client';

import Card from '@/components/dashboard/ui/card';

export default function StatsGrid({ stats }) {
    const statItems = [
        {
            label: 'My Applications',
            value: stats.myApplications,
            color: 'from-red-50 to-red-100 text-red-700',
        },
        {
            label: 'Completed',
            value: stats.completed,
            color: 'from-green-50 to-green-100 text-green-700',
        },
        {
            label: 'Ongoing Applications',
            value: stats.ongoingApplications,
            color: 'from-blue-50 to-blue-100 text-blue-700',
        },
        {
            label: 'In Review',
            value: stats.inReview,
            color: 'from-amber-50 to-amber-100 text-amber-700',
        },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statItems.map((item, index) => (
                <Card
                    key={index}
                    className={`bg-gradient-to-br ${item.color} border-0 hover:scale-105 transition-transform duration-200`}
                >
                    <div className="p-6">
                        <h3 className="text-5xl font-bold font-display mb-2">
                            {item.value}
                        </h3>
                        <p className="text-sm font-semibold opacity-80">
                            {item.label}
                        </p>
                    </div>
                </Card>
            ))}
        </div>
    );
}