'use client'
import React from 'react';
import { X } from 'lucide-react';

const ProfileCompletionModal = ({ isOpen, onClose, onComplete }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-indigo-400 hover:text-indigo-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4">
                    <div className="flex-1">
                        <p className="text-gray-700 text-sm mb-3">
                            Quickly complete your profile up to <span className="font-semibold">80%</span> to apply for this job
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                        <p className="text-indigo-600 font-semibold text-xs">50% Complete</p>
                    </div>

                    <button
                        onClick={onComplete}
                        className="px-5 py-2.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors font-medium whitespace-nowrap"
                    >
                        Complete Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCompletionModal;