'use client';

import Card, { CardHeader, CardTitle } from '@/components/dashboard/ui/card';
import Button from '@/components/dashboard/ui/button';
import { getStatusStyles } from '@/lib/dashboard-utils';

export default function ApplicationsTable({ applications, onViewDetails }) {
    return (
        <Card>
            <CardHeader className="flex items-center justify-between">
                <CardTitle>Recent Applications</CardTitle>
                <Button variant="ghost" size="sm" className="text-primary">
                    View All
                </Button>
            </CardHeader>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Description
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Date
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Status
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {applications.map((app) => (
                            <tr
                                key={app.id}
                                className="hover:bg-gray-50 transition-colors"
                            >
                                <td className="px-6 py-4">
                                    <div>
                                        <p className="font-semibold text-gray-900">{app.title}</p>
                                        <p className="text-sm text-primary">{app.company}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {app.date}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${getStatusStyles(
                                            app.status
                                        )}`}
                                    >
                                        {app.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => onViewDetails(app.id)}
                                        className="text-primary hover:text-primary-700 text-sm font-semibold transition-colors"
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}