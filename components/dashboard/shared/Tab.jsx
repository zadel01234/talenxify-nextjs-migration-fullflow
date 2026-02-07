// import React from 'react'
// import { useState } from 'react';

// const Tab = () => {
//     const [activeTab, setActiveTab] = useState('jobs');

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//         // setSelectedJob(null);
//         // setSelectedGig(null);
//         // setShowDetailPanel(false);
//         // setCurrentPage(1);
//     };
    

//   return (
//     <div className="min-h-screen bg-white-50 mt-15 sm:mt-13">
//         {/* Tabs */}
//         <div className="flex justify-center sm:justify-end px-4 sm:px-6 lg:mr-10 pt-4">
//             <div className="flex items-center gap-1 py-1 bg-gray-100 rounded-lg w-full sm:w-fit">
//                 <button
//                     onClick={() => handleTabChange('jobs')}
//                     className={`flex-1 sm:flex-none px-8 sm:px-12 py-2 sm:py-1 rounded-md font-medium transition-colors text-sm ${activeTab === 'jobs'
//                         ? 'bg-indigo-600 text-white shadow-sm'
//                         : 'text-gray-600 hover:text-gray-900'
//                         }`}
//                 >
//                     Jobs
//                 </button>
//                 <button
//                     onClick={() => handleTabChange('gigs')}
//                     className={`flex-1 sm:flex-none px-8 sm:px-12 py-2 sm:py-1 rounded-md font-medium transition-colors text-sm ${activeTab === 'gigs'
//                         ? 'bg-indigo-600 text-white shadow-sm'
//                         : 'text-gray-600 hover:text-gray-900'
//                         }`}
//                 >
//                     Gigs
//                 </button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Tab


// import React, { useState } from 'react';

// const Tab = () => {
//     const [activeTab, setActiveTab] = useState('jobs');

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 mt-15 sm:mt-13">
//             {/* Tabs */}
//             <div className="flex justify-center sm:justify-end px-4 sm:px-6 lg:mr-10 pt-4">
//                 <div className="flex items-center gap-1 py-1 bg-gray-100 rounded-lg w-full sm:w-fit">
//                     <button
//                         onClick={() => handleTabChange('jobs')}
//                         role="tab"
//                         aria-selected={activeTab === 'jobs'}
//                         className={`flex-1 sm:flex-none px-8 sm:px-12 py-2 sm:py-1 rounded-md font-medium transition-colors text-sm ${activeTab === 'jobs'
//                                 ? 'bg-indigo-600 text-white shadow-sm'
//                                 : 'text-gray-600 hover:text-gray-900'
//                             }`}
//                     >
//                         Jobs
//                     </button>
//                     <button
//                         onClick={() => handleTabChange('gigs')}
//                         role="tab"
//                         aria-selected={activeTab === 'gigs'}
//                         className={`flex-1 sm:flex-none px-8 sm:px-12 py-2 sm:py-1 rounded-md font-medium transition-colors text-sm ${activeTab === 'gigs'
//                                 ? 'bg-indigo-600 text-white shadow-sm'
//                                 : 'text-gray-600 hover:text-gray-900'
//                             }`}
//                     >
//                         Gigs
//                     </button>
//                 </div>
//             </div>

//             {/* Content based on active tab */}
//             <div className="px-4 sm:px-6 lg:px-10 py-6">
//                 {activeTab === 'jobs' ? (
//                     <div>
//                         {/* Jobs content will go here */}
//                         <h2 className="text-2xl font-bold text-gray-900">Jobs</h2>
//                     </div>
//                 ) : (
//                     <div>
//                         {/* Gigs content will go here */}
//                         <h2 className="text-2xl font-bold text-gray-900">Gigs</h2>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Tab;

import React from 'react';

const Tab = ({ activeTab, onTabChange }) => {
    return (
        <div className="flex justify-center sm:justify-end px-4 sm:px-6 pt-4 bg-white-50 mt-15 sm:mt-13">
            <div className="flex items-center  bg-gray-200 rounded-lg w-full sm:w-fit">
                <button
                    onClick={() => onTabChange('jobs')}
                    role="tab"
                    aria-selected={activeTab === 'jobs'}
                    className={`flex-1 sm:flex-none px-8 bg-gray-200 sm:px-12 py-2 sm:py-1 rounded-md  font-medium transition-colors text-sm ${activeTab === 'jobs'
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                >
                    Jobs
                </button>
                <button
                    onClick={() => onTabChange('gigs')}
                    role="tab"
                    aria-selected={activeTab === 'gigs'}
                    className={`flex-1 sm:flex-none bg-gray-200 px-8 sm:px-12 py-2 sm:py-1 rounded-md font-medium transition-colors text-sm ${activeTab === 'gigs'
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                >
                    Gigs
                </button>
            </div>
        </div>
    );
};

export default Tab;