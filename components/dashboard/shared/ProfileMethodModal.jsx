'use client'
import React from 'react';
import { X, FileText, PenLine } from 'lucide-react';

const ProfileMethodModal = ({ isOpen, onClose, onAutoGenerate, onManualFill }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 sm:p-8 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-indigo-400 hover:text-indigo-600 transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>

                <h2 className="text-xs sm:text-sm font-bold text-gray-600 mb-2">
                    How do you want to complete your profile?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Auto-Generate Option */}
                    <button
                        onClick={onAutoGenerate}
                        className="bg-blue-200 border-2 border-blue-200 rounded-xl p-6 hover:border-blue-300 transition-all group text-center"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-100 p-4 rounded-lg group-hover:bg-blue-200 transition-colors">
                                <FileText className="w-4 h-4 text-blue-600" />
                            </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                            Auto-Generate from Resume
                        </h3>
                        <p className="text-xs text-gray-600 mb-2">
                            Upload your resume and we'll automatically extract your details into your profile.
                        </p>
                        <div className="mt-4 bg-white border border-blue-600 text-blue-600 px-5 py-1.5 rounded-sm hover:bg-blue-50 transition-colors font-medium text-sm inline-block">
                            Upload Resume
                        </div>
                    </button>

                    {/* Manual Fill Option */}
                    <button
                        onClick={onManualFill}
                        className="bg-red-200 border-2 border-red-200 rounded-xl p-6 hover:border-red-300 transition-all group text-center"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="bg-red-100 p-4 rounded-lg group-hover:bg-red-200 transition-colors">
                                <PenLine className="w-4 h-4 text-red-600" />
                            </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                            Fill in Manually
                        </h3>
                        <p className="text-xs text-gray-600 mb-2">
                            Enter your details manually section by section.
                        </p>
                        <div className="mt-4 bg-white border border-red-600 text-red-600 px-6 py-1.5 rounded-sm hover:bg-red-50 transition-colors font-medium text-sm inline-block">
                            Fill in Manually
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileMethodModal;