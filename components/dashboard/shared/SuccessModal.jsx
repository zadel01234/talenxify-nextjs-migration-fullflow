// Success Modal Component
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { MapPin, Clock, Eye, Heart, ChevronDown, ChevronUp, Star, X, Check } from 'lucide-react';


const SuccessModal = ({ isOpen, onClose }) => {
    const router = useRouter()

    if (!isOpen) return null;

    const handleGoToDashboard = () => {
        console.log('Navigating to dashboard');
        // Add navigation logic here
        router.push('/dashboard');
    };

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-2">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className=" text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-full"
                    >
                        {/* <X className="w-5 h-5" /> */}
                        <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40041 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 14.4241 4.31039 12.8637 4.91345 11.4078C5.5165 9.95189 6.40042 8.62902 7.51472 7.51472C8.62902 6.40041 9.95189 5.5165 11.4078 4.91344C12.8637 4.31039 14.4241 4 16 4C17.5759 4 19.1363 4.31039 20.5922 4.91345C22.0481 5.5165 23.371 6.40042 24.4853 7.51472C25.5996 8.62902 26.4835 9.95189 27.0866 11.4078C27.6896 12.8637 28 14.4241 28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28L16 28Z" stroke="#596CFF" strokeWidth="2.66667" stroke-linecap="round" />
                            <path d="M12 12L20 20" stroke="#596CFF" strokeWidth="2.66667" stroke-linecap="round" />
                            <path d="M20 12L12 20" stroke="#596CFF" strokeWidth="2.66667" stroke-linecap="round" />
                        </svg>

                    </button>
                </div>

                {/* Success Icon */}
                <div className="flex justify-center mb-4">
                    <div className="relative w-24 h-24">
                        {/* Success Image */}
                        <div className="flex justify-center mb-6">
                            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                                <Image
                                    src="/checked.png"   // 👈 your image path
                                    alt="Success"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Success Message */}
                <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Gig Submitted Successfully!!
                    </h3>
                    <p className="text-sm text-gray-600">
                        The client will review your submission and reach out to you if you're successful
                    </p>
                </div>

                {/* Done Button */}
                <button
                    onClick={onClose}
                    className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                    Done
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;