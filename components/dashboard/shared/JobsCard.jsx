'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import { MapPin, Clock, Users, X } from 'lucide-react';
import ProfileCompletionModal from './ProfileCompletionModal';
import ProfileMethodModal from './ProfileMethodModal';

const JobsCard = ({ jobs }) => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showMethodModal, setShowMethodModal] = useState(false);
    const router = useRouter()

    // Check if mobile on mount and resize
    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleCardClick = (job) => {
        setSelectedJob(job);
    };

    const handleClose = () => {
        setSelectedJob(null);
    };

    const handleApplyClick = (e) => {
        e.stopPropagation();
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleCompleteProfile = () => {
        setIsModalOpen(false);
        setShowMethodModal(true);
    };

    const handleMethodModalClose = () => {
        setShowMethodModal(false);
    };

    const handleAutoGenerate = () => {
        setShowMethodModal(false);
        router.push('/dashboard/upload-resume');
    };

    const handleManualFill = () => {
        setShowMethodModal(false);
        router.push('/dashboard/manual-fill');
    };

    // Handle empty state
    if (!jobs || jobs.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500">
                No jobs found. Try adjusting your filters.
            </div>
        );
    }

    // Mobile view with vertical expansion
    if (isMobile) {
        return (
            <div className="mb-6 space-y-4">
                {jobs.map((job) => {
                    const isExpanded = selectedJob?.id === job.id;

                    return (
                        <div
                            key={job.id}
                            className={`bg-white rounded-lg border transition-all ${isExpanded ? 'border-indigo-600 shadow-lg' : 'border-gray-200'
                                }`}
                        >
                            {/* Main Card Content */}
                            <div
                                onClick={() => handleCardClick(job)}
                                className="p-4 cursor-pointer"
                            >
                                {/* Header */}
                                <div className="flex items-start gap-3 mb-2">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <img
                                            src={job.logo}
                                            alt={`${job.company} logo`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-sm text-gray-900 truncate">
                                            {job.company}
                                        </h3>
                                        <p className="text-indigo-600 font-medium text-xs mt-0.5">
                                            {job.position}
                                        </p>
                                    </div>
                                </div>

                                {/* Location and Time */}
                                <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-3 h-3 text-indigo-500" />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3 text-indigo-500" />
                                        <span>{job.timePosted}</span>
                                    </div>
                                </div>

                                {/* Description - Only show when NOT expanded */}
                                {!isExpanded && (
                                    <p className="text-xs text-gray-600 mb-2 line-clamp-3">
                                        {job.description}
                                    </p>
                                )}

                                {/* Tags - Only show when NOT expanded */}
                                {!isExpanded && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                                            {job.type}
                                        </span>
                                        <span className="px-2 py-1 bg-purple-50 text-purple-600 rounded text-xs">
                                            {job.level}
                                        </span>
                                        <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs">
                                            {job.remote}
                                        </span>
                                    </div>
                                )}

                                {/* Footer - Only show when NOT expanded */}
                                {!isExpanded && (
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <div className="flex items-center gap-3 text-xs text-gray-800">
                                            <span className="font-medium">{job.salary}</span>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-3 h-3 text-indigo-500" />
                                                <span>{job.applied} Applied</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleCardClick(job);
                                            }}
                                            className="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs font-medium hover:bg-indigo-700 transition-colors"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Expanded Details - Mobile */}
                            {isExpanded && job.jobSummary && (
                                <div className="px-4 pb-5 border-t border-gray-100 pt-5 bg-gray-50 relative">
                                    <button
                                        onClick={handleClose}
                                        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5 text-gray-600" />
                                    </button>

                                    <h4 className="text-base font-bold text-gray-900 mb-4">Job Summary</h4>

                                    <div className="mb-4">
                                        <h5 className="text-sm font-bold text-indigo-600 mb-2">About Us:</h5>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            {job.jobSummary.aboutUs}
                                        </p>
                                    </div>

                                    <div className="mb-4">
                                        <h5 className="text-sm font-bold text-indigo-600 mb-2">About The Job:</h5>
                                        <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                            {job.jobSummary.aboutJob}
                                        </p>
                                        <div className="space-y-2 text-xs">
                                            <div>
                                                <span className="font-semibold">Job Title:</span> {job.jobSummary.jobTitle}
                                            </div>
                                            <div>
                                                <span className="font-semibold">Experience:</span> {job.jobSummary.experience}
                                            </div>
                                            <div>
                                                <span className="font-semibold">Job Type:</span> {job.jobSummary.jobType}
                                            </div>
                                            <div>
                                                <span className="font-semibold">Location:</span> {job.jobSummary.location}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h5 className="text-sm font-bold text-indigo-600 mb-2">Responsibilities:</h5>
                                        <ul className="space-y-1.5 pl-1">
                                            {job.jobSummary.responsibilities.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 text-xs text-gray-600">
                                                    <span className="text-gray-400 mt-0.5">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-4">
                                        <h5 className="text-sm font-bold text-indigo-600 mb-2">Qualifications:</h5>
                                        <ul className="space-y-1.5 pl-1">
                                            {job.jobSummary.qualifications.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 text-xs text-gray-600">
                                                    <span className="text-gray-400 mt-0.5">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Apply Button - Mobile (No modal on mobile) */}
                                    <div className="flex justify-center pt-4 border-t border-gray-200">
                                        <button
                                            // onClick={(e) => e.stopPropagation()}
                                            onClick={handleApplyClick}
                                            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                                        >
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
                {/* Profile Completion Modal */}
                <ProfileCompletionModal
                    isOpen={isModalOpen}
                    onClose={handleModalClose}
                    onComplete={handleCompleteProfile}
                />

                {/* Profile Method Modal */}
                <ProfileMethodModal
                    isOpen={showMethodModal}
                    onClose={handleMethodModalClose}
                    onAutoGenerate={handleAutoGenerate}
                    onManualFill={handleManualFill}
                />
            </div>
        );
    }

    // Desktop view with side panel (original behavior)
    return (
        <div className="mb-6">
            {!selectedJob ? (
                // Grid View
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-3">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            onClick={() => handleCardClick(job)}
                            className="bg-white rounded-lg border border-gray-200 p-4 sm:p-5 cursor-pointer hover:shadow-lg transition-shadow"
                        >
                            {/* Header */}
                            <div className="flex items-start gap-3 mb-2">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img
                                        src={job.logo}
                                        alt={`${job.company} logo`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-sm text-gray-900 truncate">
                                        {job.company}
                                    </h3>
                                    <p className="text-indigo-600 font-medium text-xs sm:text-sm mt-0.5">
                                        {job.position}
                                    </p>
                                </div>
                            </div>

                            {/* Location and Time */}
                            <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3 text-indigo-500" />
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-indigo-500" />
                                    <span>{job.timePosted}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-xs text-gray-600 mb-2 line-clamp-3 text-justify">
                                {job.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                                    {job.type}
                                </span>
                                <span className="px-2 py-1 bg-purple-50 text-purple-600 rounded text-xs">
                                    {job.level}
                                </span>
                                <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs">
                                    {job.remote}
                                </span>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <div className="flex items-center gap-4 text-xs text-gray-800">
                                    <span className="font-medium">{job.salary}</span>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-500" />
                                        <span>{job.applied} Applied</span>
                                    </div>
                                </div>
                                <button className="px-3 sm:px-3.5 py-1.5 bg-indigo-600 text-white rounded text-xs sm:text-sm font-medium hover:bg-indigo-700 transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // Detail View - Desktop
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Sidebar - Job List */}
                    <div className="lg:col-span-1 space-y-4 max-h-screen overflow-y-auto">
                        {jobs.map((job) => (
                            <div
                                key={job.id}
                                onClick={() => handleCardClick(job)}
                                className={`bg-white rounded-lg border p-4 cursor-pointer transition-all ${selectedJob.id === job.id
                                        ? 'border-indigo-600 shadow-md'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <img
                                            src={job.logo}
                                            alt={`${job.company} logo`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-xs text-gray-900 truncate">
                                            {job.company}
                                        </h3>
                                        <p className="text-indigo-600 text-xs mt-0.5 truncate">
                                            {job.position}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                                    <MapPin className="w-3 h-3" />
                                    <span>{job.location}</span>
                                    <Clock className="w-3 h-3 ml-1" />
                                    <span>{job.timePosted}</span>
                                </div>
                                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                                    {job.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs">
                                        {job.type}
                                    </span>
                                    <span className="px-2 py-0.5 bg-purple-50 text-purple-600 rounded text-xs">
                                        {job.level}
                                    </span>
                                    <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded text-xs">
                                        {job.remote}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                    <span className="text-xs font-medium text-gray-600">{job.salary}</span>
                                    <div className="flex items-center gap-1 text-xs text-gray-600">
                                        <Users className="w-3 h-3" />
                                        <span>{job.applied} Applied</span>
                                    </div>
                                    <button
                                        onClick={handleApplyClick}
                                        className="px-3 py-1 bg-indigo-600 text-white rounded text-xs font-medium hover:bg-indigo-700"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Panel - Job Details */}
                    <div className="lg:col-span-2 bg-white rounded-lg border border-indigo-600 p-6 sm:p-8 relative">
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img
                                    src={selectedJob.logo}
                                    alt={`${selectedJob.company} logo`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                                    {selectedJob.company}
                                </h2>
                                <h3 className="text-lg sm:text-xl text-indigo-600 font-semibold mb-2">
                                    {selectedJob.position}
                                </h3>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{selectedJob.location}</span>
                                    </div>
                                    <span>•</span>
                                    <span>{selectedJob.timePosted}</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons - WITH MODAL */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <button
                                onClick={handleApplyClick}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-sm font-medium hover:bg-indigo-700 transition-colors"
                            >
                                Apply Now
                            </button>
                            <button className="px-6 py-2 text-indigo-500 border border-gray-300 rounded-sm font-medium hover:bg-gray-200 transition-colors">
                                Share
                            </button>
                        </div>

                        {/* Job Summary */}
                        {selectedJob.jobSummary && (
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-3">Job Summary</h4>

                                    <div className="mb-4">
                                        <h5 className="text-indigo-600 font-semibold mb-2">About Us:</h5>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {selectedJob.jobSummary.aboutUs}
                                        </p>
                                    </div>

                                    <div className="mb-4">
                                        <h5 className="text-indigo-600 font-semibold mb-2">About The Job:</h5>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                            {selectedJob.jobSummary.aboutJob}
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                            <div>
                                                <span className="font-semibold">Job Title:</span> {selectedJob.jobSummary.jobTitle}
                                            </div>
                                            <div>
                                                <span className="font-semibold">Experience Length:</span> {selectedJob.jobSummary.experience}
                                            </div>
                                            <div>
                                                <span className="font-semibold">Job Type:</span> {selectedJob.jobSummary.jobType}
                                            </div>
                                            <div>
                                                <span className="font-semibold">Location:</span> {selectedJob.jobSummary.location}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h5 className="text-indigo-600 font-semibold mb-2">Responsibilities:</h5>
                                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                                            {selectedJob.jobSummary.responsibilities.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h5 className="text-indigo-600 font-semibold mb-2">Qualifications:</h5>
                                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                                            {selectedJob.jobSummary.qualifications.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Profile Completion Modal */}
            <ProfileCompletionModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onComplete={handleCompleteProfile}
            />

            {/* Profile Method Modal */}
            <ProfileMethodModal
                isOpen={showMethodModal}
                onClose={handleMethodModalClose}
                onAutoGenerate={handleAutoGenerate}
                onManualFill={handleManualFill}
            />
        </div>
    );
};

export default JobsCard;



