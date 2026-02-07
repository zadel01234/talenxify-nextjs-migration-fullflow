'use client';

import { Bell, Search, Settings } from 'lucide-react';
import { useState } from 'react';

export default function Header({ userName = 'User' }) {
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <header className="bg-gray-50 sticky top-0 z-40">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Left: Greeting */}
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Hi, <span className="text-primary">{userName}</span>{' '}
                            <span className="inline-block animate-wave">👋</span>
                        </h1>
                        <p className="text-sm text-gray-600">
                            Let's land your next big opportunity.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}