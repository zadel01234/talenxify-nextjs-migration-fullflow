'use client';

import { useState } from 'react';
import { Wallet, AlertCircle } from 'lucide-react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from '@/components/dashboard/ui/modal';
import Button from '@/components/dashboard/ui/button';
import { formatCurrency } from '@/lib/dashboard-utils';

export default function WithdrawModal({ isOpen, onClose, balance, onConfirm, isLoading }) {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value);

        const numValue = parseFloat(value);
        if (numValue > balance) {
            setError('Insufficient balance');
        } else if (numValue <= 0) {
            setError('Amount must be greater than 0');
        } else {
            setError('');
        }
    };

    const handleSubmit = () => {
        const numValue = parseFloat(amount);
        if (!error && numValue > 0 && numValue <= balance) {
            onConfirm(numValue);
            setAmount('');
            setError('');
        }
    };

    const setQuickAmount = (percentage) => {
        const quickAmount = (balance * percentage).toFixed(2);
        setAmount(quickAmount);
        setError('');
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalHeader onClose={onClose}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">Withdraw Funds</h2>
                </div>
            </ModalHeader>

            <ModalBody className="space-y-6">
                {/* Available Balance */}
                <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl p-4 border border-primary/20">
                    <p className="text-sm text-gray-600 mb-1">Available Balance</p>
                    <p className="text-2xl font-bold text-gray-900">
                        {formatCurrency(balance)}
                    </p>
                </div>

                {/* Amount Input */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Withdrawal Amount
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                            ₦
                        </span>
                        <input
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            placeholder="0.00"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg font-semibold"
                        />
                    </div>
                    {error && (
                        <div className="flex items-center gap-2 mt-2 text-red-600">
                            <AlertCircle className="w-4 h-4" />
                            <p className="text-sm">{error}</p>
                        </div>
                    )}
                </div>

                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-4 gap-2">
                    {[0.25, 0.5, 0.75, 1].map((percentage) => (
                        <button
                            key={percentage}
                            onClick={() => setQuickAmount(percentage)}
                            className="py-2 bg-gray-100 hover:bg-primary/10 hover:text-primary rounded-lg text-sm font-semibold transition-colors"
                        >
                            {percentage === 1 ? 'All' : `${percentage * 100}%`}
                        </button>
                    ))}
                </div>

                {/* Bank Info (Placeholder) */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-xs font-semibold text-gray-600 mb-2">
                        Withdrawal Account
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                        **** **** **** 1234
                    </p>
                    <p className="text-xs text-gray-600">First Bank of Nigeria</p>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button
                    onClick={handleSubmit}
                    disabled={!amount || !!error || isLoading}
                >
                    {isLoading ? 'Processing...' : 'Confirm Withdrawal'}
                </Button>
            </ModalFooter>
        </Modal>
    );
}