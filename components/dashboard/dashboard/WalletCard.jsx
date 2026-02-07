'use client';

import { Eye, EyeOff, Wallet } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/dashboard/ui/button';
import { formatCurrency } from '@/lib/dashboard-utils';

export default function WalletCard({ balance, pendingPayment, currency, onWithdraw }) {
    const [showBalance, setShowBalance] = useState(true);

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] rounded-2xl p-8 text-white">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <p className="text-sm font-medium text-gray-300">Wallet Balance</p>
                    <button
                        onClick={() => setShowBalance(!showBalance)}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label={showBalance ? 'Hide balance' : 'Show balance'}
                    >
                        {showBalance ? (
                            <Eye className="w-5 h-5" />
                        ) : (
                            <EyeOff className="w-5 h-5" />
                        )}
                    </button>
                </div>

                {/* Balance */}
                <div className="mb-6">
                    <h2 className="text-4xl font-bold mb-2 font-display">
                        {showBalance ? formatCurrency(balance, currency) : '₦•••••••••'}
                    </h2>
                    <p className="text-sm text-gray-300">
                        Pending Payment:{' '}
                        <span className="text-blue-300 font-semibold">
                            {formatCurrency(pendingPayment, currency)}
                        </span>
                    </p>
                </div>

                {/* Withdraw Button */}
                <Button
                    onClick={onWithdraw}
                    className="bg-primary hover:bg-primary-600"
                >
                    <Wallet className="w-5 h-5" />
                    Withdraw
                </Button>
            </div>
        </div>
    );
}