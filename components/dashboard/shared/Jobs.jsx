
// 'use client'
// import React, { useState, useMemo } from 'react';
// import { useJobs } from '@/lib/hooks/useJobs';
// import { useGigs } from '@/lib/hooks/useGigs';
// import Tab from './Tab';
// import Filters from './Filters';
// import Pagination from './Pagination';
// import JobsCard from './JobsCard';
// import GigsCard from './GigsCard';

// const Jobs = () => {
//     const [activeTab, setActiveTab] = useState('jobs');
//     const [filters, setFilters] = useState({
//         skill: '',
//         location: '',
//         level: '',
//         priceRange: '',
//         jobType: ''
//     });
//     const [searchQuery, setSearchQuery] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [resultsPerPage, setResultsPerPage] = useState(9);

//     // Fetch data with React Query
//     const { data: jobs = [], isLoading: jobsLoading, error: jobsError } = useJobs();
//     const { data: gigs = [], isLoading: gigsLoading, error: gigsError } = useGigs();

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//         setCurrentPage(1);
//     };

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     const handleResultsPerPageChange = (newResultsPerPage) => {
//         setResultsPerPage(newResultsPerPage);
//         setCurrentPage(1);
//     };

//     const filteredItems = useMemo(() => {
//         const items = activeTab === 'jobs' ? jobs : gigs;
//         return items.filter(item => {
//             if (searchQuery) {
//                 const query = searchQuery.toLowerCase();
//                 if (activeTab === 'jobs') {
//                     const matchesSearch =
//                         item.position.toLowerCase().includes(query) ||
//                         item.company.toLowerCase().includes(query) ||
//                         item.skill?.toLowerCase().includes(query);
//                     if (!matchesSearch) return false;
//                 } else {
//                     const matchesSearch =
//                         item.title.toLowerCase().includes(query) ||
//                         item.freelancer.toLowerCase().includes(query) ||
//                         item.skill?.toLowerCase().includes(query);
//                     if (!matchesSearch) return false;
//                 }
//             }

//             if (filters.skill && item.skill !== filters.skill) return false;
//             if (activeTab === 'jobs') {
//                 if (filters.location && item.location !== filters.location) return false;
//                 if (filters.level && item.level !== filters.level) return false;
//                 if (filters.priceRange && item.salary !== filters.priceRange) return false;
//                 if (filters.jobType && item.type !== filters.jobType) return false;
//             } else {
//                 if (filters.level && item.level !== filters.level) return false;
//             }

//             return true;
//         });
//     }, [activeTab, filters, searchQuery, jobs, gigs]);


//     // for api data will use this later
//     // const filteredItems = useMemo(() => {
//     //     const items = activeTab === 'jobs' ? jobs : gigs;
//     //     return items.filter(item => {
//     //         if (searchQuery) {
//     //             const query = searchQuery.toLowerCase();
//     //             if (activeTab === 'jobs') {
//     //                 // Support both static and API data structures
//     //                 const title = item.title || item.position || '';
//     //                 const company = item.recruiter_details?.organization_name || item.company || '';
//     //                 const skills = Array.isArray(item.skills_required)
//     //                     ? item.skills_required.join(' ').toLowerCase()
//     //                     : (item.skill || '').toLowerCase();

//     //                 const matchesSearch =
//     //                     title.toLowerCase().includes(query) ||
//     //                     company.toLowerCase().includes(query) ||
//     //                     skills.includes(query);
//     //                 if (!matchesSearch) return false;
//     //             } else {
//     //                 const title = item.title || '';
//     //                 const freelancer = item.freelancer || '';
//     //                 const skills = Array.isArray(item.skills_required)
//     //                     ? item.skills_required.join(' ').toLowerCase()
//     //                     : (item.skill || '').toLowerCase();

//     //                 const matchesSearch =
//     //                     title.toLowerCase().includes(query) ||
//     //                     freelancer.toLowerCase().includes(query) ||
//     //                     skills.includes(query);
//     //                 if (!matchesSearch) return false;
//     //             }
//     //         }

//     //         // Filter by skill
//     //         if (filters.skill) {
//     //             const itemSkills = Array.isArray(item.skills_required)
//     //                 ? item.skills_required
//     //                 : [item.skill];
//     //             if (!itemSkills.includes(filters.skill)) return false;
//     //         }

//     //         if (activeTab === 'jobs') {
//     //             // Support both API and static data
//     //             const location = item.location_type || item.location || '';
//     //             const level = item.experience_level || item.level || '';
//     //             const salary = item.salary || `${item.budget_min}-${item.budget_max}` || '';
//     //             const type = item.job_type || item.type || '';

//     //             if (filters.location && location !== filters.location) return false;
//     //             if (filters.level && level !== filters.level) return false;
//     //             if (filters.priceRange && salary !== filters.priceRange) return false;
//     //             if (filters.jobType && type !== filters.jobType) return false;
//     //         } else {
//     //             const level = item.experience_level || item.level || '';
//     //             if (filters.level && level !== filters.level) return false;
//     //         }

//     //         return true;
//     //     });
//     // }, [activeTab, filters, searchQuery, jobs, gigs]);

//     const handleFilterChange = (newFilters) => {
//         setFilters(newFilters);
//         setCurrentPage(1);
//     };

//     const handleSearchChange = (query) => {
//         setSearchQuery(query);
//         setCurrentPage(1);
//     };

//     // Pagination logic
//     const totalPages = Math.ceil(filteredItems.length / resultsPerPage);
//     const indexOfLastItem = currentPage * resultsPerPage;
//     const indexOfFirstItem = indexOfLastItem - resultsPerPage;
//     const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

//     // Determine loading and error states
//     const isLoading = activeTab === 'jobs' ? jobsLoading : gigsLoading;
//     const error = activeTab === 'jobs' ? jobsError : gigsError;

//     // Loading state
//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gray-50">
//                 <Tab activeTab={activeTab} onTabChange={handleTabChange} />
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
//                     <div className="flex justify-center items-center min-h-[400px]">
//                         <div className="text-lg text-gray-600">Loading {activeTab}...</div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     // Error state
//     if (error) {
//         return (
//             <div className="min-h-screen bg-gray-50">
//                 <Tab activeTab={activeTab} onTabChange={handleTabChange} />
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
//                     <div className="flex justify-center items-center min-h-[400px]">
//                         <div className="text-red-500">
//                             Error loading {activeTab}: {error.message}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <Tab activeTab={activeTab} onTabChange={handleTabChange} />

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 ">
//                 <h1 className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
//                     {activeTab === 'jobs' ? 'Find Jobs' : 'Find Gigs'}
//                 </h1>

//                 <Filters
//                     onFilterChange={handleFilterChange}
//                     onSearchChange={handleSearchChange}
//                 />

//                 <div className="mb-3 text-xs sm:text-sm md:text-base text-gray-600">
//                     Found {filteredItems.length} {activeTab === 'jobs' ? (filteredItems.length === 1 ? 'job' : 'jobs') : (filteredItems.length === 1 ? 'gig' : 'gigs')}
//                 </div>

//                 {/* Conditionally render JobsCard or GigsCard based on activeTab */}
//                 {activeTab === 'jobs' ? (
//                     <JobsCard jobs={currentItems} />
//                 ) : (
//                     <GigsCard gigs={currentItems} />
//                 )}

//                 {/* Pagination Component */}
//                 {filteredItems.length > 0 && (
//                     <Pagination
//                         currentPage={currentPage}
//                         totalPages={totalPages}
//                         resultsPerPage={resultsPerPage}
//                         totalResults={filteredItems.length}
//                         onPageChange={handlePageChange}
//                         onResultsPerPageChange={handleResultsPerPageChange}
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Jobs;



'use client'
import React, { useState, useMemo, useEffect } from 'react';
import { useJobs } from '@/lib/hooks/useJobs';
import { useGigs } from '@/lib/hooks/useGigs';
import Tab from './Tab';
import Filters from './Filters';
import Pagination from './Pagination';
import JobsCard from './JobsCard';
import GigsCard from './GigsCard';

const Jobs = () => {
    const [activeTab, setActiveTab] = useState('jobs');
    const [filters, setFilters] = useState({
        skill: '',
        location: '',
        level: '',
        priceRange: '',
        jobType: ''
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(9);

    // Fetch data with React Query
    const { data: jobs = [], isLoading: jobsLoading, error: jobsError } = useJobs();
    const { data: gigs = [], isLoading: gigsLoading, error: gigsError } = useGigs();

    // Debug: Log data source on mount and when data changes
    useEffect(() => {
        if (jobs.length > 0) {
            const firstJob = jobs[0];

            // Detect if using static data vs API data
            const isStaticData = firstJob.hasOwnProperty('position') &&
                firstJob.hasOwnProperty('company') &&
                !firstJob.hasOwnProperty('recruiter_details');

            const isApiData = firstJob.hasOwnProperty('title') &&
                firstJob.hasOwnProperty('recruiter_details');

            if (isStaticData) {
                console.log('📦 Using STATIC job data');
                console.log('Reason: Data structure matches static format (has "position" and "company" fields)');
                console.log('Sample job:', {
                    position: firstJob.position,
                    company: firstJob.company,
                    location: firstJob.location
                });
            } else if (isApiData) {
                console.log('🌐 Using API job data');
                console.log('Sample job:', {
                    title: firstJob.title,
                    organization: firstJob.recruiter_details?.organization_name,
                    location_type: firstJob.location_type
                });
            } else {
                console.warn('⚠️ Unknown job data format detected');
                console.log('Sample job:', firstJob);
            }
        } else if (!jobsLoading && jobs.length === 0) {
            console.log('📭 No jobs available');
            if (jobsError) {
                console.error('❌ Jobs API Error:', jobsError.message);
                console.log('Reason: API call failed, falling back to static data or empty state');
            }
        }
    }, [jobs, jobsLoading, jobsError]);

    useEffect(() => {
        if (gigs.length > 0) {
            const firstGig = gigs[0];

            const isStaticData = firstGig.hasOwnProperty('freelancer') &&
                !firstGig.hasOwnProperty('recruiter_details');

            const isApiData = firstGig.hasOwnProperty('title') &&
                firstGig.hasOwnProperty('recruiter_details');

            if (isStaticData) {
                console.log('📦 Using STATIC gig data');
                console.log('Reason: Data structure matches static format (has "freelancer" field)');
                console.log('Sample gig:', {
                    title: firstGig.title,
                    freelancer: firstGig.freelancer
                });
            } else if (isApiData) {
                console.log('🌐 Using API gig data');
                console.log('Sample gig:', {
                    title: firstGig.title,
                    organization: firstGig.recruiter_details?.organization_name
                });
            }
        } else if (!gigsLoading && gigs.length === 0) {
            console.log('📭 No gigs available');
            if (gigsError) {
                console.error('❌ Gigs API Error:', gigsError.message);
                console.log('Reason: API call failed, falling back to static data or empty state');
            }
        }
    }, [gigs, gigsLoading, gigsError]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleResultsPerPageChange = (newResultsPerPage) => {
        setResultsPerPage(newResultsPerPage);
        setCurrentPage(1);
    };

    // Updated filtering logic that supports both static and API data formats
    const filteredItems = useMemo(() => {
        const items = activeTab === 'jobs' ? jobs : gigs;

        console.log(`🔍 Filtering ${activeTab}:`, {
            totalItems: items.length,
            searchQuery,
            filters
        });

        const filtered = items.filter(item => {
            // Search filtering
            if (searchQuery) {
                const query = searchQuery.toLowerCase();

                if (activeTab === 'jobs') {
                    // Support both static data (position, company) and API data (title, recruiter_details)
                    const title = (item.title || item.position || '').toLowerCase();
                    const company = (item.recruiter_details?.organization_name || item.company || '').toLowerCase();

                    // Handle skills - API returns array, static might be string
                    let skills = '';
                    if (Array.isArray(item.skills_required)) {
                        skills = item.skills_required.join(' ').toLowerCase();
                    } else if (item.skill) {
                        skills = item.skill.toLowerCase();
                    }

                    const matchesSearch =
                        title.includes(query) ||
                        company.includes(query) ||
                        skills.includes(query) ||
                        (item.description || '').toLowerCase().includes(query);

                    if (!matchesSearch) return false;
                } else {
                    // Gigs filtering
                    const title = (item.title || '').toLowerCase();
                    const freelancer = (item.freelancer || item.recruiter_details?.full_name || '').toLowerCase();

                    let skills = '';
                    if (Array.isArray(item.skills_required)) {
                        skills = item.skills_required.join(' ').toLowerCase();
                    } else if (item.skill) {
                        skills = item.skill.toLowerCase();
                    }

                    const matchesSearch =
                        title.includes(query) ||
                        freelancer.includes(query) ||
                        skills.includes(query) ||
                        (item.description || '').toLowerCase().includes(query);

                    if (!matchesSearch) return false;
                }
            }

            // Skill filtering
            if (filters.skill) {
                const itemSkills = Array.isArray(item.skills_required)
                    ? item.skills_required
                    : (item.skill ? [item.skill] : []);

                if (!itemSkills.some(skill =>
                    skill.toLowerCase() === filters.skill.toLowerCase()
                )) {
                    return false;
                }
            }

            // Jobs-specific filters
            if (activeTab === 'jobs') {
                // Location filter - supports both formats
                if (filters.location) {
                    const location = item.location_type || item.address || item.location || '';
                    if (location.toLowerCase() !== filters.location.toLowerCase()) {
                        return false;
                    }
                }

                // Level filter - supports both formats
                if (filters.level) {
                    const level = item.experience_level || item.level || '';
                    if (level.toLowerCase() !== filters.level.toLowerCase()) {
                        return false;
                    }
                }

                // Price range filter - supports both formats
                if (filters.priceRange) {
                    const salary = item.salary ||
                        (item.budget_min && item.budget_max
                            ? `${item.budget_currency || '₦'}${item.budget_min} - ${item.budget_max}`
                            : '');
                    if (salary !== filters.priceRange) {
                        return false;
                    }
                }

                // Job type filter - supports both formats
                if (filters.jobType) {
                    const jobType = item.job_type || item.type || '';
                    if (jobType.toLowerCase() !== filters.jobType.toLowerCase()) {
                        return false;
                    }
                }
            } else {
                // Gigs-specific filters
                if (filters.level) {
                    const level = item.experience_level || item.level || '';
                    if (level.toLowerCase() !== filters.level.toLowerCase()) {
                        return false;
                    }
                }
            }

            return true;
        });

        console.log(`✅ Filtered results: ${filtered.length} ${activeTab}`);

        return filtered;
    }, [activeTab, filters, searchQuery, jobs, gigs]);

    const handleFilterChange = (newFilters) => {
        console.log('🎛️ Filters changed:', newFilters);
        setFilters(newFilters);
        setCurrentPage(1);
    };

    const handleSearchChange = (query) => {
        console.log('🔎 Search query changed:', query);
        setSearchQuery(query);
        setCurrentPage(1);
    };

    // Pagination logic
    const totalPages = Math.ceil(filteredItems.length / resultsPerPage);
    const indexOfLastItem = currentPage * resultsPerPage;
    const indexOfFirstItem = indexOfLastItem - resultsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    // Determine loading and error states
    const isLoading = activeTab === 'jobs' ? jobsLoading : gigsLoading;
    const error = activeTab === 'jobs' ? jobsError : gigsError;

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Tab activeTab={activeTab} onTabChange={handleTabChange} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="text-lg text-gray-600">Loading {activeTab}...</div>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        console.error(`❌ ${activeTab} Error:`, error);
        return (
            <div className="min-h-screen bg-gray-50">
                <Tab activeTab={activeTab} onTabChange={handleTabChange} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
                    <div className="flex flex-col justify-center items-center min-h-[400px]">
                        <div className="text-red-500 mb-2">
                            Error loading {activeTab}: {error.message}
                        </div>
                        <div className="text-sm text-gray-500">
                            Check console for details
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Tab activeTab={activeTab} onTabChange={handleTabChange} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
                <h1 className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {activeTab === 'jobs' ? 'Find Jobs' : 'Find Gigs'}
                </h1>

                <Filters
                    onFilterChange={handleFilterChange}
                    onSearchChange={handleSearchChange}
                />

                <div className="mb-3 text-xs sm:text-sm md:text-base text-gray-600">
                    Found {filteredItems.length} {activeTab === 'jobs'
                        ? (filteredItems.length === 1 ? 'job' : 'jobs')
                        : (filteredItems.length === 1 ? 'gig' : 'gigs')}
                </div>

                {/* Conditionally render JobsCard or GigsCard based on activeTab */}
                {activeTab === 'jobs' ? (
                    <JobsCard jobs={currentItems} />
                ) : (
                    <GigsCard gigs={currentItems} />
                )}

                {/* Pagination Component */}
                {filteredItems.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        resultsPerPage={resultsPerPage}
                        totalResults={filteredItems.length}
                        onPageChange={handlePageChange}
                        onResultsPerPageChange={handleResultsPerPageChange}
                    />
                )}
            </div>
        </div>
    );
};

export default Jobs;