// 'use client'
// import React, { useState, useMemo,} from 'react';
// import Tab from './Tab';
// import Filters from './Filters';
// import Pagination from './Pagination';
// import jobs from "./data2"
// import gigs from "./data"
// import JobsCard from './JobsCard';
// import GigsCard from './GigsCard';
// import { MapPin, Clock, Eye, Heart, ChevronDown, ChevronUp, Star, X, Check } from 'lucide-react';


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
//     }, [activeTab, filters, searchQuery]);

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
import React, { useState, useMemo } from 'react';
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

    const filteredItems = useMemo(() => {
        const items = activeTab === 'jobs' ? jobs : gigs;
        return items.filter(item => {
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                if (activeTab === 'jobs') {
                    const matchesSearch =
                        item.position.toLowerCase().includes(query) ||
                        item.company.toLowerCase().includes(query) ||
                        item.skill?.toLowerCase().includes(query);
                    if (!matchesSearch) return false;
                } else {
                    const matchesSearch =
                        item.title.toLowerCase().includes(query) ||
                        item.freelancer.toLowerCase().includes(query) ||
                        item.skill?.toLowerCase().includes(query);
                    if (!matchesSearch) return false;
                }
            }

            if (filters.skill && item.skill !== filters.skill) return false;
            if (activeTab === 'jobs') {
                if (filters.location && item.location !== filters.location) return false;
                if (filters.level && item.level !== filters.level) return false;
                if (filters.priceRange && item.salary !== filters.priceRange) return false;
                if (filters.jobType && item.type !== filters.jobType) return false;
            } else {
                if (filters.level && item.level !== filters.level) return false;
            }

            return true;
        });
    }, [activeTab, filters, searchQuery, jobs, gigs]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setCurrentPage(1);
    };

    const handleSearchChange = (query) => {
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
        return (
            <div className="min-h-screen bg-gray-50">
                <Tab activeTab={activeTab} onTabChange={handleTabChange} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="text-red-500">
                            Error loading {activeTab}: {error.message}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Tab activeTab={activeTab} onTabChange={handleTabChange} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 ">
                <h1 className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {activeTab === 'jobs' ? 'Find Jobs' : 'Find Gigs'}
                </h1>

                <Filters
                    onFilterChange={handleFilterChange}
                    onSearchChange={handleSearchChange}
                />

                <div className="mb-3 text-xs sm:text-sm md:text-base text-gray-600">
                    Found {filteredItems.length} {activeTab === 'jobs' ? (filteredItems.length === 1 ? 'job' : 'jobs') : (filteredItems.length === 1 ? 'gig' : 'gigs')}
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