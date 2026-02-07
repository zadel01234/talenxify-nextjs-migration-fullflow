'use client'
import React, { useState } from 'react';
import Image from "next/image";

import { useRouter } from 'next/navigation'
import { Plus, X, FileText, File, Check } from 'lucide-react';


const PortfolioUploadPage = () => {
    const [portfolioItems, setPortfolioItems] = useState([null, null, null, null]);
    const [showSuccess, setShowSuccess] = useState(false);
    const router = useRouter()

    const handleFileSelect = (index, e) => {
        const file = e.target.files?.[0];
        if (file) {
            // Check file size (max 10MB)
            if (file.size > 10 * 1024 * 1024) {
                alert('File size must be less than 10MB');
                return;
            }

            const isImage = file.type.startsWith('image/');
            const isDocument = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.ms-powerpoint',
                'application/vnd.openxmlformats-officedocument.presentationml.presentation'
            ].includes(file.type);

            // Check file type
            if (!isImage && !isDocument) {
                alert('Please upload an image or document file (PDF, DOC, DOCX, PPT, PPTX)');
                return;
            }

            // Create preview URL for images, or store document info
            if (isImage) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const newItems = [...portfolioItems];
                    newItems[index] = {
                        file,
                        preview: reader.result,
                        name: file.name,
                        type: 'image'
                    };
                    setPortfolioItems(newItems);
                };
                reader.readAsDataURL(file);
            } else {
                // For documents, just store file info
                const newItems = [...portfolioItems];
                newItems[index] = {
                    file,
                    name: file.name,
                    type: 'document',
                    fileType: file.type
                };
                setPortfolioItems(newItems);
            }
        }
    };

    const getDocumentIcon = (fileType) => {
        if (fileType?.includes('pdf')) {
            return <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" />;
        } else if (fileType?.includes('word') || fileType?.includes('document')) {
            return <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" />;
        } else if (fileType?.includes('presentation') || fileType?.includes('powerpoint')) {
            return <File className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500" />;
        }
        return <File className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500" />;
    };

    const removeItem = (index) => {
        const newItems = [...portfolioItems];
        newItems[index] = null;
        setPortfolioItems(newItems);
    };

    const handleSkipForLater = () => {
        console.log('Skipping portfolio upload');
        // Add navigation logic here
        // router.push('/next-page')
    };

    const handleProfileUpdate = () => {
        const uploadedItems = portfolioItems.filter(item => item !== null);
        console.log('Uploading portfolio items:', uploadedItems);
        // Show success page
        setShowSuccess(true);
        // Add upload logic here if needed
    };

    const handleGoToDashboard = () => {
        console.log('Navigating to dashboard');
        // Add navigation logic here
        router.push('/dashboard');
    };

    // Success Page Component
    if (showSuccess) {
        return (
            // <div className="min-h-screen bg-gray-50 mt-45">
            //     <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 text-center">
            //         {/* Success Icon */}
            //         <div className="flex justify-center mb-6">
            //             <div className="relative">
            //                 <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-indigo-100 flex items-center justify-center">
            //                     <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-indigo-600 flex items-center justify-center">
            //                         <Check className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 stroke-3" />
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>

            //         {/* Success Message */}
            //         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 justify-center text-center">
            //             Application Submitted!
            //         </h1>
            //         <p className="text-sm sm:text-base text-gray-500 mb-8 px-4 lg:px-84 justify-center text-center">
            //             Your profile has been updated and your Application has been sent to the Hiring Team!
            //         </p>

            //         {/* Dashboard Button */}
            //         <button
            //             onClick={handleGoToDashboard}
            //             className="w-full max-w-xs mx-auto bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-sm sm:text-base justify-center text-center "
            //         >
            //             Take me to Dashboard
            //         </button>
            //     </div>
            // </div>
            <div className="min-h-screen bg-gray-50 mt-45">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 text-center">

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

                    {/* Success Message */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
                        Application Submitted!
                    </h1>

                    <p className="text-sm sm:text-base text-gray-500 mb-8 px-4 lg:px-84 text-center">
                        Your profile has been updated and your Application has been sent to the Hiring Team!
                    </p>

                    {/* Dashboard Button */}
                    <button
                        onClick={handleGoToDashboard}
                        className="w-full max-w-xs mx-auto bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-sm sm:text-base"
                    >
                        Take me to Dashboard
                    </button>

                </div>
            </div>
            
        );
    }

    // Main Portfolio Upload Page
    return (
        <div className="min-h-screen bg-gray-50 mt-15 px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
                {/* Header */}
                <div className="text-left mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Upload your Portfolio
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600">
                        Upload your portfolio
                    </p>
                </div>

                {/* Upload Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="relative">
                            <label
                                className={`block aspect-square rounded-lg cursor-pointer transition-all ${item
                                        ? 'bg-white border-2 border-gray-200'
                                        : 'bg-gray-100 border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50'
                                    }`}
                            >
                                {item ? (
                                    <>
                                        {item.type === 'image' ? (
                                            <img
                                                src={item.preview}
                                                alt={`Portfolio ${index + 1}`}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center h-full p-4">
                                                {getDocumentIcon(item.fileType)}
                                                <p className="mt-2 text-xs sm:text-sm text-gray-700 font-medium text-center break-all px-2">
                                                    {item.name}
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {(item.file.size / 1024 / 1024).toFixed(2)} MB
                                                </p>
                                            </div>
                                        )}
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                removeItem(index);
                                            }}
                                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-colors shadow-lg"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </>
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <Plus className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400" />
                                    </div>
                                )}
                                <input
                                    type="file"
                                    accept="image/*,.pdf,.doc,.docx,.ppt,.pptx"
                                    className="hidden"
                                    onChange={(e) => handleFileSelect(index, e)}
                                />
                            </label>
                        </div>
                    ))}
                </div>

                {/* File Info */}
                <div className="text-center mb-6">
                    <p className="text-xs sm:text-sm text-gray-500">
                        Supported formats: JPG, PNG, GIF, PDF, DOC, DOCX, PPT, PPTX • Max size: 10MB per file
                    </p>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                    <button
                        onClick={handleSkipForLater}
                        className="w-full text-indigo-600 hover:text-indigo-700 font-medium py-2 text-sm sm:text-base transition-colors"
                    >
                        Skip for Later
                    </button>
                    <button
                        onClick={handleProfileUpdate}
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-sm sm:text-base"
                    >
                        Profile Update
                    </button>
                </div>
            </div>
        </div>
            // <div className="min-h-screen bg-gray-50 mt-45">
            //     <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 text-center">

            //         {/* Success Image */}
            //         <div className="flex justify-center mb-6">
            //             <div className="relative w-24 h-24 sm:w-32 sm:h-32">
            //                 <Image
            //                 src="/checked.png"   // 👈 your image path
            //                 alt="Success"
            //                 fill
            //                 priority
            //                 className="object-contain"
            //                 />
            //             </div>
            //         </div>

            //         {/* Success Message */}
            //         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
            //             Application Submitted!
            //         </h1>

            //         <p className="text-sm sm:text-base text-gray-500 mb-8 px-4 lg:px-84 text-center">
            //             Your profile has been updated and your Application has been sent to the Hiring Team!
            //         </p>

            //         {/* Dashboard Button */}
            //         <button
            //         onClick={handleGoToDashboard}
            //         className="w-full max-w-xs mx-auto bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-sm sm:text-base"
            //         >
            //             Take me to Dashboard
            //         </button>

            //     </div>
            // </div>

    );
};

export default PortfolioUploadPage;