'use client'
import React, { useState } from 'react';
import { Clock, Heart, Star, X } from 'lucide-react';

const ApplyGigModal = ({ isOpen, onClose, onSubmit, gigTitle, gigPrice, gigRating, gigtimePosted, freelancerName, verified }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [description, setDescription] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (description.trim()) {
            onSubmit({ description, isFavorite });
            setDescription(''); // Reset form
        }
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    // Render star rating
    const renderStars = (rating) => {
        return (
            <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`w-3 h-3 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-xl w-full relative">
                
                {/* Header */}
                <div className="p-5 pb-0">
                    {/* First Row: Name, Stars, Time Posted, and Favorite Button */}
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-2">
                            <h3 className="text-base font-semibold text-gray-900">{freelancerName}
                            </h3>
                            <h3>{verified && (
                                <svg width="14" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.81836 0.242188C6.57294 -0.0811644 7.42706 -0.0811641 8.18164 0.242188L13.3936 2.47559C13.7612 2.63316 14 2.99548 14 3.39551V8.64844C13.9999 10.586 13.064 12.4041 11.4873 13.5303L8.16211 15.9053C7.46679 16.4018 6.53321 16.4018 5.83789 15.9053L2.5127 13.5303C0.936025 12.4041 0.000119299 10.586 0 8.64844V3.39551C0 2.99548 0.238761 2.63316 0.606445 2.47559L5.81836 0.242188ZM10.625 4.95508C10.1937 4.61007 9.56376 4.68007 9.21875 5.11133L5.91797 9.23828L4.70703 8.0293C4.31651 7.63877 3.68349 7.63877 3.29297 8.0293C2.90261 8.41983 2.9025 9.05289 3.29297 9.44336L4.89746 11.0488C5.52958 11.6808 6.57141 11.6227 7.12988 10.9248L10.7812 6.36133C11.1262 5.93012 11.0561 5.30011 10.625 4.95508Z" fill="#596CFF" />
                                </svg>)}
                            </h3>
                            <div className="flex items-center gap-1.5">
                                {renderStars(gigRating)}
                                <span className="text-xs text-gray-600">{gigRating}</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-indigo-500">
                                <Clock className="w-3 h-3" />
                                <span>{gigtimePosted}</span>
                            </div>
                        </div>
                        <button
                            onClick={toggleFavorite}
                            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <Heart
                                className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Second Row: Title and Price */}
                    <div className="flex items-start justify-between mb-2">
                        <p className="text-sm font-semibold text-indigo-500">{gigTitle}</p>
                        <p className="text-sm font-semibold text-indigo-500 ml-4">{gigPrice}</p>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-0 right-2 text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-full"
                    >
                        {/* <X className="w-5 h-5" /> */}
                        <svg width="20" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40041 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 14.4241 4.31039 12.8637 4.91345 11.4078C5.5165 9.95189 6.40042 8.62902 7.51472 7.51472C8.62902 6.40041 9.95189 5.5165 11.4078 4.91344C12.8637 4.31039 14.4241 4 16 4C17.5759 4 19.1363 4.31039 20.5922 4.91345C22.0481 5.5165 23.371 6.40042 24.4853 7.51472C25.5996 8.62902 26.4835 9.95189 27.0866 11.4078C27.6896 12.8637 28 14.4241 28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28L16 28Z" stroke="#596CFF" strokeWidth="2.66667" strokeLinecap="round" />
                            <path d="M12 12L20 20" stroke="#596CFF" strokeWidth="2.66667" stroke-linecap="round" />
                            <path d="M20 12L12 20" stroke="#596CFF" strokeWidth="2.66667" stroke-linecap="round" />
                        </svg>

                    </button>
                </div>

                {/* Content */}
                <div className="p-5 pt-3">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tell us why you're best fit for this gig
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe..."
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={!description.trim()}
                        className={`w-full py-2.5 rounded-lg font-medium transition-colors ${description.trim()
                                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ApplyGigModal;

// note make it mobile responsive the next time youre here