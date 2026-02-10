// // src/lib/services/gigsService.js
// // Service for gigs data - switches between static and API

// import { apiClient } from '../api/client';
// import { gi as staticGigs } from "../../components/shared/data";

// // Toggle this via environment variable
// const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA !== 'false';

// export const gigsService = {
//     // GET all gigs
//     async getGigs() {
//         if (USE_STATIC_DATA) {
//             // Simulate API delay for realistic behavior
//             await new Promise(resolve => setTimeout(resolve, 300));
//             return staticGigs;
//         }
//         return apiClient.get('/gigs');
//     },

//     // GET single gig by ID
//     async getGigById(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 200));
//             const gig = staticGigs.find(gig => gig.id === id);
//             if (!gig) throw new Error('Gig not found');
//             return gig;
//         }
//         return apiClient.get(`/gigs/${id}`);
//     },

//     // GET filtered gigs
//     async getFilteredGigs(filters) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             let filtered = [...staticGigs];

//             // Apply filters to static data
//             if (filters.category) {
//                 filtered = filtered.filter(gig => gig.category === filters.category);
//             }
//             if (filters.search) {
//                 filtered = filtered.filter(gig =>
//                     gig.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     gig.description.toLowerCase().includes(filters.search.toLowerCase())
//                 );
//             }

//             return filtered;
//         }

//         // Build query string for API
//         const params = new URLSearchParams(filters).toString();
//         return apiClient.get(`/gigs?${params}`);
//     },

//     // POST create new gig
//     async createGig(data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const newGig = { id: Date.now().toString(), ...data };
//             staticGigs.push(newGig);
//             return newGig;
//         }
//         return apiClient.post('/gigs', data);
//     },

//     // PATCH update gig
//     async updateGig(id, data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const index = staticGigs.findIndex(gig => gig.id === id);
//             if (index === -1) throw new Error('Gig not found');
//             staticGigs[index] = { ...staticGigs[index], ...data };
//             return staticGigs[index];
//         }
//         return apiClient.patch(`/gigs/${id}`, data);
//     },

//     // DELETE gig
//     async deleteGig(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             const index = staticGigs.findIndex(gig => gig.id === id);
//             if (index === -1) throw new Error('Gig not found');
//             staticGigs.splice(index, 1);
//             return;
//         }
//         return apiClient.delete(`/gigs/${id}`);
//     },
// };




// // src/lib/services/gigsService.js
// // Service for gigs data - switches between static and API

// import { apiClient } from '../api/client';
// import staticGigs from '@/components/shared/data';

// // Toggle this via environment variable
// const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA !== 'false';

// export const gigsService = {
//     // GET all gigs
//     async getGigs() {
//         if (USE_STATIC_DATA) {
//             // Simulate API delay for realistic behavior
//             await new Promise(resolve => setTimeout(resolve, 300));
//             return staticGigs;
//         }
//         return apiClient.get('/gigs');
//     },

//     // GET single gig by ID
//     async getGigById(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 200));
//             const gig = staticGigs.find(gig => gig.id === id);
//             if (!gig) throw new Error('Gig not found');
//             return gig;
//         }
//         return apiClient.get(`/gigs/${id}`);
//     },

//     // GET filtered gigs
//     async getFilteredGigs(filters) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             let filtered = [...staticGigs];

//             // Apply filters to static data
//             if (filters.category) {
//                 filtered = filtered.filter(gig => gig.category === filters.category);
//             }
//             if (filters.search) {
//                 filtered = filtered.filter(gig =>
//                     gig.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     gig.description.toLowerCase().includes(filters.search.toLowerCase())
//                 );
//             }

//             return filtered;
//         }

//         // Build query string for API
//         const params = new URLSearchParams(filters).toString();
//         return apiClient.get(`/gigs?${params}`);
//     },

//     // POST create new gig
//     async createGig(data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const newGig = { id: Date.now().toString(), ...data };
//             staticGigs.push(newGig);
//             return newGig;
//         }
//         return apiClient.post('/gigs', data);
//     },

//     // PATCH update gig
//     async updateGig(id, data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const index = staticGigs.findIndex(gig => gig.id === id);
//             if (index === -1) throw new Error('Gig not found');
//             staticGigs[index] = { ...staticGigs[index], ...data };
//             return staticGigs[index];
//         }
//         return apiClient.patch(`/gigs/${id}`, data);
//     },

//     // DELETE gig
//     async deleteGig(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             const index = staticGigs.findIndex(gig => gig.id === id);
//             if (index === -1) throw new Error('Gig not found');
//             staticGigs.splice(index, 1);
//             return;
//         }
//         return apiClient.delete(`/gigs/${id}`);
//     },
// };




// src/lib/services/gigsService.js
// Service for gigs data - switches between static and API

// import { apiClient } from '../api/client';
// import staticGigs from '@/components/shared/data';

// // Toggle this via environment variable
// // const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA !== 'false';
// const USE_STATIC_DATA = false;

// export const gigsService = {
//     // GET all gigs
//     async getGigs() {
//         if (USE_STATIC_DATA) {
//             // Simulate API delay for realistic behavior
//             await new Promise(resolve => setTimeout(resolve, 300));
//             return staticGigs;
//         }

//         try {
//             // Try to get gigs from API
//             // Note: Update '/gigs' to match your actual backend endpoint
//             // If your backend doesn't have a gigs endpoint yet, keep USE_STATIC_DATA=true
//             return apiClient.get('/gig-postings');
//         } catch (error) {
//             console.warn('Gigs API not available, using static data');
//             return staticGigs;
//         }
//     },

//     // GET single gig by ID
//     async getGigById(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 200));
//             const gig = staticGigs.find(gig => gig.id === id);
//             if (!gig) throw new Error('Gig not found');
//             return gig;
//         }
//         return apiClient.get(`/gig-postings/${id}`);
//     },

//     // GET filtered gigs
//     async getFilteredGigs(filters) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             let filtered = [...staticGigs];

//             // Apply filters to static data
//             if (filters.category) {
//                 filtered = filtered.filter(gig => gig.category === filters.category);
//             }
//             if (filters.search) {
//                 filtered = filtered.filter(gig =>
//                     gig.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     gig.description.toLowerCase().includes(filters.search.toLowerCase())
//                 );
//             }

//             return filtered;
//         }

//         // Build query string for API
//         const params = new URLSearchParams(filters).toString();
//         return apiClient.get(`/gig-postings?${params}`);
//     },

//     // POST create new gig
//     async createGig(data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const newGig = { id: Date.now().toString(), ...data };
//             staticGigs.push(newGig);
//             return newGig;
//         }
//         return apiClient.post('/gig-postings', data);
//     },

//     // PATCH update gig
//     async updateGig(id, data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const index = staticGigs.findIndex(gig => gig.id === id);
//             if (index === -1) throw new Error('Gig not found');
//             staticGigs[index] = { ...staticGigs[index], ...data };
//             return staticGigs[index];
//         }
//         return apiClient.patch(`/gig-postings/${id}`, data);
//     },

//     // DELETE gig
//     async deleteGig(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             const index = staticGigs.findIndex(gig => gig.id === id);
//             if (index === -1) throw new Error('Gig not found');
//             staticGigs.splice(index, 1);
//             return;
//         }
//         return apiClient.delete(`/gig-postings/${id}`);
//     },
// };



// src/lib/services/gigsService.js
// Service for gigs data - switches between static and API

// // import { apiClient } from '../api/client';
// import { dashboardApi } from '@/lib/api/dashboard';
// import staticGigs from '@/components/dashboard/shared/data';

// // Toggle this via environment variable
// const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA !== 'false';

// export const gigsService = {
//     // GET all gigs
//     async getGigs() {
//         if (USE_STATIC_DATA) {
//             // Simulate API delay for realistic behavior
//             await new Promise(resolve => setTimeout(resolve, 300));
//             return staticGigs;
//         }

//         try {
//             // Try to get gigs from API
//             const response = await dashboardApi.get('/gig-postings');

//             // Handle different response formats from backend
//             // Format 1: Direct array [...]
//             if (Array.isArray(response)) {
//                 return response;
//             }

//             // Format 2: Wrapped in data { data: [...] }
//             if (response && Array.isArray(response.data)) {
//                 return response.data;
//             }

//             // Format 3: Wrapped in results { results: [...] }
//             if (response && Array.isArray(response.results)) {
//                 return response.results;
//             }

//             // Format 4: Wrapped in gigs { gigs: [...] }
//             if (response && Array.isArray(response.gigs)) {
//                 return response.gigs;
//             }

//             console.error('Unexpected gigs response format:', response);
//             return staticGigs;

//         } catch (error) {
//             console.warn('Gigs API not available, using static data');
//             return staticGigs;
//         }
//     },

//     // GET single gig by ID
//     async getGigById(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 200));
//             const gig = staticGigs.find(gig => gig.id === id);
//             if (!gig) throw new Error('Gig not found');
//             return gig;
//         }
//         return dashboardApi.get(`/gig-postings/${id}`);
//     },

//     // GET filtered gigs
//     async getFilteredGigs(filters) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             let filtered = [...staticGigs];

//             // Apply filters to static data
//             if (filters.category) {
//                 filtered = filtered.filter(gig => gig.category === filters.category);
//             }
//             if (filters.search) {
//                 filtered = filtered.filter(gig =>
//                     gig.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     gig.description.toLowerCase().includes(filters.search.toLowerCase())
//                 );
//             }

//             return filtered;
//         }

//         // Build query string for API
//         const params = new URLSearchParams(filters).toString();
//         return dashboardApi.get(`/gig-postings?${params}`);
//     },

//     // POST create new gig
//     async createGig(data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const newGig = { id: Date.now().toString(), ...data };
//             staticGigs.push(newGig);
//             return newGig;
//         }
//         return dashboardApi.post('/gig-postings', data);
//     },

//     // PATCH update gig
//     async updateGig(id, data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const index = staticGigs.findIndex(gig => gig.id === id);
//             if (index === -1) throw new Error('Gig not found');
//             staticGigs[index] = { ...staticGigs[index], ...data };
//             return staticGigs[index];
//         }
//         return dashboardApi.patch(`/gig-postings/${id}`, data);
//     },

//     // DELETE gig
//     async deleteGig(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             const index = staticGigs.findIndex(gig => gig.id === id);
//             if (index === -1) throw new Error('Gig not found');
//             staticGigs.splice(index, 1);
//             return;
//         }
//         return dashboardApi.delete(`/gig-postings/${id}`);
//     },
// };


// import { dashboardApi } from '@/lib/api/dashboard';
// import staticGigs from '@/components/dashboard/shared/data';

// // Toggle this via environment variable
// const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA !== 'false';

// export const gigsService = {
//     // GET all gigs - Uses: dashboardApi.getGigs(filters)
//     async getGigs(filters = {}) {
//         if (USE_STATIC_DATA) {
//             // Simulate API delay for realistic behavior
//             await new Promise(resolve => setTimeout(resolve, 300));
//             return staticGigs;
//         }

//         try {
//             const response = await dashboardApi.getGigs(filters);

//             console.log('Raw API response:', response); // Debug log

//             // Handle different response formats from backend
//             // Format 1: Direct array [...]
//             if (Array.isArray(response)) {
//                 console.log('✅ Gigs: Direct array format');
//                 return response;
//             }

//             // Format 2: Paginated with results { results: [...], count: 10, next: null }
//             if (response && Array.isArray(response.results)) {
//                 console.log('✅ Gigs: Paginated format with results array');
//                 return response.results;
//             }

//             // Format 3: Wrapped in data { data: [...] }
//             if (response && Array.isArray(response.data)) {
//                 console.log('✅ Gigs: Data wrapper format');
//                 return response.data;
//             }

//             // Format 4: Wrapped in gigs { gigs: [...] }
//             if (response && Array.isArray(response.gigs)) {
//                 console.log('✅ Gigs: Gigs wrapper format');
//                 return response.gigs;
//             }

//             console.error('❌ Unexpected response format:', response);
//             console.error('Available keys:', Object.keys(response || {}));
//             // Fallback to static data if format is unexpected
//             return staticGigs;

//         } catch (error) {
//             console.error('Failed to fetch gigs from API:', error.message);
//             console.warn('Falling back to static data');
//             return staticGigs;
//         }
//     },

//     // GET single gig by ID - Uses: dashboardApi.getGigById(id)
//     async getGigById(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 200));
//             const gig = staticGigs.find(gig => gig.id === id);
//             if (!gig) throw new Error('Gig not found');
//             return gig;
//         }

//         try {
//             const response = await dashboardApi.getGigById(id);

//             // Handle wrapped response
//             if (response && response.data) {
//                 return response.data;
//             }

//             return response;
//         } catch (error) {
//             console.error(`Failed to fetch gig ${id} from API:`, error.message);
//             // Fallback to static data
//             const gig = staticGigs.find(gig => gig.id === id);
//             if (!gig) throw new Error('Gig not found');
//             return gig;
//         }
//     },

//     // GET filtered gigs
//     async getFilteredGigs(filters) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             let filtered = [...staticGigs];

//             // Apply filters to static data
//             if (filters.category) {
//                 filtered = filtered.filter(gig => gig.category === filters.category);
//             }
//             if (filters.experience_level) {
//                 filtered = filtered.filter(gig => gig.level === filters.experience_level);
//             }
//             if (filters.location_type) {
//                 filtered = filtered.filter(gig =>
//                     gig.remote === (filters.location_type === 'remote')
//                 );
//             }
//             if (filters.search) {
//                 filtered = filtered.filter(gig =>
//                     gig.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     gig.description.toLowerCase().includes(filters.search.toLowerCase())
//                 );
//             }

//             return filtered;
//         }

//         // API filters are already in the correct format
//         const apiFilters = {
//             search: filters.search,
//             category: filters.category,
//             experience_level: filters.experience_level,
//             location_type: filters.location_type,
//             ordering: filters.ordering,
//             page: filters.page,
//             page_size: filters.page_size,
//         };

//         // Remove undefined values
//         Object.keys(apiFilters).forEach(key => {
//             if (apiFilters[key] === undefined) {
//                 delete apiFilters[key];
//             }
//         });

//         try {
//             const response = await dashboardApi.getGigs(apiFilters);

//             // Handle response format
//             if (Array.isArray(response)) return response;
//             if (response?.results) return response.results;
//             if (response?.data) return response.data;

//             return response;
//         } catch (error) {
//             console.error('Failed to fetch filtered gigs:', error.message);
//             return [];
//         }
//     },

//     // POST create new gig - Uses: dashboardApi.createJobPosting(data)
//     // Note: Gigs are created using the same endpoint as jobs, differentiated by job_or_gig field
//     async createGig(data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const newGig = { id: Date.now().toString(), ...data };
//             staticGigs.push(newGig);
//             return newGig;
//         }

//         try {
//             // Add job_or_gig field to specify it's a gig
//             const gigData = {
//                 ...data,
//                 job_or_gig: 'gig', // Important: This tells the API it's a gig, not a job
//             };

//             const response = await dashboardApi.createJobPosting(gigData);

//             // Handle wrapped response
//             if (response?.data) return response.data;

//             return response;
//         } catch (error) {
//             console.error('Failed to create gig:', error.message);
//             throw error;
//         }
//     },

//     // PATCH update gig - Uses: dashboardApi.updateJobPosting(id, data)
//     async updateGig(id, data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const index = staticGigs.findIndex(gig => gig.id === id);
//             if (index === -1) throw new Error('Gig not found');
//             staticGigs[index] = { ...staticGigs[index], ...data };
//             return staticGigs[index];
//         }

//         try {
//             const response = await dashboardApi.updateJobPosting(id, data);

//             // Handle wrapped response
//             if (response?.data) return response.data;

//             return response;
//         } catch (error) {
//             console.error(`Failed to update gig ${id}:`, error.message);
//             throw error;
//         }
//     },

//     // DELETE gig - Uses: dashboardApi.deleteJobPosting(id)
//     async deleteGig(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             const index = staticGigs.findIndex(gig => gig.id === id);
//             if (index === -1) throw new Error('Gig not found');
//             staticGigs.splice(index, 1);
//             return;
//         }

//         try {
//             await dashboardApi.deleteJobPosting(id);
//         } catch (error) {
//             console.error(`Failed to delete gig ${id}:`, error.message);
//             throw error;
//         }
//     },

//     // GET user's own gig postings - Uses: dashboardApi.getMyJobPostings()
//     // Note: This returns all postings (jobs + gigs), you may need to filter for gigs only
//     async getMyGigPostings() {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             return staticGigs;
//         }

//         try {
//             const response = await dashboardApi.getMyJobPostings();

//             // Handle different response formats
//             let postings = [];
//             if (Array.isArray(response)) {
//                 postings = response;
//             } else if (response?.results) {
//                 postings = response.results;
//             } else if (response?.data) {
//                 postings = response.data;
//             } else {
//                 postings = response;
//             }

//             // Filter to only return gigs (job_or_gig === 'gig')
//             const gigs = postings.filter(posting => posting.job_or_gig === 'gig');
//             return gigs;

//         } catch (error) {
//             console.error('Failed to fetch my gig postings:', error.message);
//             return [];
//         }
//     },
// };


import { dashboardApi } from '@/lib/api/dashboard';
import staticGigs from '@/components/dashboard/shared/data';

// Only use static data if explicitly enabled via environment variable
const FORCE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA === 'true';

export const gigsService = {
    // GET all gigs - Uses: dashboardApi.getGigs(filters)
    async getGigs(filters = {}) {
        // ONLY use static data if explicitly forced via env variable
        if (FORCE_STATIC_DATA) {
            console.log('⚙️ NEXT_PUBLIC_USE_STATIC_DATA=true - Using static gig data');
            await new Promise(resolve => setTimeout(resolve, 300));
            return staticGigs;
        }

        // Try API first
        try {
            console.log('🌐 Attempting to fetch gigs from API...');
            const response = await dashboardApi.getGigs(filters);

            console.log('📦 Raw API response:', response);

            // Handle different response formats from backend
            // Format 1: Direct array [...]
            if (Array.isArray(response)) {
                console.log('✅ Gigs loaded from API - Direct array format');
                return response;
            }

            // Format 2: Paginated with results { results: [...], count: 10, next: null }
            if (response && Array.isArray(response.results)) {
                console.log('✅ Gigs loaded from API - Paginated format');
                return response.results;
            }

            // Format 3: Wrapped in data { data: [...] }
            if (response && Array.isArray(response.data)) {
                console.log('✅ Gigs loaded from API - Data wrapper format');
                return response.data;
            }

            // Format 4: Wrapped in gigs { gigs: [...] }
            if (response && Array.isArray(response.gigs)) {
                console.log('✅ Gigs loaded from API - Gigs wrapper format');
                return response.gigs;
            }

            // Unexpected format - log and fallback
            console.warn('⚠️ Unexpected API response format:', response);
            console.warn('Available keys:', Object.keys(response || {}));
            console.log('📦 Falling back to static data due to unexpected format');
            return staticGigs;

        } catch (error) {
            console.error('❌ Failed to fetch gigs from API:', error.message);
            console.log('Reason:', error.message);
            console.log('📦 Falling back to static data');
            return staticGigs;
        }
    },

    // GET single gig by ID - Uses: dashboardApi.getGigById(id)
    async getGigById(id) {
        if (FORCE_STATIC_DATA) {
            console.log('⚙️ Using static data - Finding gig:', id);
            await new Promise(resolve => setTimeout(resolve, 200));
            const gig = staticGigs.find(gig => gig.id === id);
            if (!gig) throw new Error('Gig not found');
            return gig;
        }

        try {
            console.log('🌐 Fetching gig from API:', id);
            const response = await dashboardApi.getGigById(id);

            // Handle wrapped response
            if (response && response.data) {
                console.log('✅ Gig loaded from API');
                return response.data;
            }

            console.log('✅ Gig loaded from API');
            return response;
        } catch (error) {
            console.error(`❌ Failed to fetch gig ${id} from API:`, error.message);
            console.log('📦 Falling back to static data');
            // Fallback to static data
            const gig = staticGigs.find(gig => gig.id === id);
            if (!gig) throw new Error('Gig not found');
            return gig;
        }
    },

    // GET filtered gigs
    async getFilteredGigs(filters) {
        if (FORCE_STATIC_DATA) {
            console.log('⚙️ Using static data - Applying filters client-side');
            await new Promise(resolve => setTimeout(resolve, 300));
            let filtered = [...staticGigs];

            // Apply filters to static data
            if (filters.category) {
                filtered = filtered.filter(gig => gig.category === filters.category);
            }
            if (filters.experience_level) {
                filtered = filtered.filter(gig => gig.level === filters.experience_level);
            }
            if (filters.location_type) {
                filtered = filtered.filter(gig =>
                    gig.remote === (filters.location_type === 'remote')
                );
            }
            if (filters.search) {
                filtered = filtered.filter(gig =>
                    gig.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                    gig.description.toLowerCase().includes(filters.search.toLowerCase())
                );
            }

            return filtered;
        }

        // API filters are already in the correct format
        const apiFilters = {
            search: filters.search,
            category: filters.category,
            experience_level: filters.experience_level,
            location_type: filters.location_type,
            ordering: filters.ordering,
            page: filters.page,
            page_size: filters.page_size,
        };

        // Remove undefined values
        Object.keys(apiFilters).forEach(key => {
            if (apiFilters[key] === undefined) {
                delete apiFilters[key];
            }
        });

        try {
            console.log('🌐 Fetching filtered gigs from API with filters:', apiFilters);
            const response = await dashboardApi.getGigs(apiFilters);

            // Handle response format
            if (Array.isArray(response)) return response;
            if (response?.results) return response.results;
            if (response?.data) return response.data;

            return response;
        } catch (error) {
            console.error('❌ Failed to fetch filtered gigs:', error.message);
            console.log('📦 Falling back to empty array');
            return [];
        }
    },

    // POST create new gig - Uses: dashboardApi.createJobPosting(data)
    async createGig(data) {
        if (FORCE_STATIC_DATA) {
            console.log('⚙️ Using static data - Simulating gig creation');
            await new Promise(resolve => setTimeout(resolve, 400));
            const newGig = { id: Date.now().toString(), ...data };
            staticGigs.push(newGig);
            return newGig;
        }

        try {
            console.log('🌐 Creating gig via API...');
            // Add job_or_gig field to specify it's a gig
            const gigData = {
                ...data,
                job_or_gig: 'gig', // Important: This tells the API it's a gig
            };

            const response = await dashboardApi.createJobPosting(gigData);

            // Handle wrapped response
            if (response?.data) {
                console.log('✅ Gig created successfully');
                return response.data;
            }

            console.log('✅ Gig created successfully');
            return response;
        } catch (error) {
            console.error('❌ Failed to create gig:', error.message);
            throw error;
        }
    },

    // PATCH update gig - Uses: dashboardApi.updateJobPosting(id, data)
    async updateGig(id, data) {
        if (FORCE_STATIC_DATA) {
            console.log('⚙️ Using static data - Simulating gig update');
            await new Promise(resolve => setTimeout(resolve, 400));
            const index = staticGigs.findIndex(gig => gig.id === id);
            if (index === -1) throw new Error('Gig not found');
            staticGigs[index] = { ...staticGigs[index], ...data };
            return staticGigs[index];
        }

        try {
            console.log('🌐 Updating gig via API:', id);
            const response = await dashboardApi.updateJobPosting(id, data);

            // Handle wrapped response
            if (response?.data) {
                console.log('✅ Gig updated successfully');
                return response.data;
            }

            console.log('✅ Gig updated successfully');
            return response;
        } catch (error) {
            console.error(`❌ Failed to update gig ${id}:`, error.message);
            throw error;
        }
    },

    // DELETE gig - Uses: dashboardApi.deleteJobPosting(id)
    async deleteGig(id) {
        if (FORCE_STATIC_DATA) {
            console.log('⚙️ Using static data - Simulating gig deletion');
            await new Promise(resolve => setTimeout(resolve, 300));
            const index = staticGigs.findIndex(gig => gig.id === id);
            if (index === -1) throw new Error('Gig not found');
            staticGigs.splice(index, 1);
            return;
        }

        try {
            console.log('🌐 Deleting gig via API:', id);
            await dashboardApi.deleteJobPosting(id);
            console.log('✅ Gig deleted successfully');
        } catch (error) {
            console.error(`❌ Failed to delete gig ${id}:`, error.message);
            throw error;
        }
    },

    // GET user's own gig postings - Uses: dashboardApi.getMyJobPostings()
    async getMyGigPostings() {
        if (FORCE_STATIC_DATA) {
            console.log('⚙️ Using static data for my gig postings');
            await new Promise(resolve => setTimeout(resolve, 300));
            return staticGigs;
        }

        try {
            console.log('🌐 Fetching my gig postings from API...');
            const response = await dashboardApi.getMyJobPostings();

            // Handle different response formats
            let postings = [];
            if (Array.isArray(response)) {
                postings = response;
            } else if (response?.results) {
                postings = response.results;
            } else if (response?.data) {
                postings = response.data;
            } else {
                postings = response;
            }

            // Filter to only return gigs (job_or_gig === 'gig')
            const gigs = postings.filter(posting => posting.job_or_gig === 'gig');
            console.log(`✅ My gig postings loaded from API (${gigs.length} gigs)`);
            return gigs;

        } catch (error) {
            console.error('❌ Failed to fetch my gig postings:', error.message);
            console.log('📦 Falling back to empty array');
            return [];
        }
    },
};