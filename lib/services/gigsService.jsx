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

// import { apiClient } from '../api/client';
import { dashboardApi } from '@/lib/api/dashboard';
import staticGigs from '@/components/dashboard/shared/data';

// Toggle this via environment variable
const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA !== 'false';

export const gigsService = {
    // GET all gigs
    async getGigs() {
        if (USE_STATIC_DATA) {
            // Simulate API delay for realistic behavior
            await new Promise(resolve => setTimeout(resolve, 300));
            return staticGigs;
        }

        try {
            // Try to get gigs from API
            const response = await dashboardApi.get('/gig-postings');

            // Handle different response formats from backend
            // Format 1: Direct array [...]
            if (Array.isArray(response)) {
                return response;
            }

            // Format 2: Wrapped in data { data: [...] }
            if (response && Array.isArray(response.data)) {
                return response.data;
            }

            // Format 3: Wrapped in results { results: [...] }
            if (response && Array.isArray(response.results)) {
                return response.results;
            }

            // Format 4: Wrapped in gigs { gigs: [...] }
            if (response && Array.isArray(response.gigs)) {
                return response.gigs;
            }

            console.error('Unexpected gigs response format:', response);
            return staticGigs;

        } catch (error) {
            console.warn('Gigs API not available, using static data');
            return staticGigs;
        }
    },

    // GET single gig by ID
    async getGigById(id) {
        if (USE_STATIC_DATA) {
            await new Promise(resolve => setTimeout(resolve, 200));
            const gig = staticGigs.find(gig => gig.id === id);
            if (!gig) throw new Error('Gig not found');
            return gig;
        }
        return dashboardApi.get(`/gig-postings/${id}`);
    },

    // GET filtered gigs
    async getFilteredGigs(filters) {
        if (USE_STATIC_DATA) {
            await new Promise(resolve => setTimeout(resolve, 300));
            let filtered = [...staticGigs];

            // Apply filters to static data
            if (filters.category) {
                filtered = filtered.filter(gig => gig.category === filters.category);
            }
            if (filters.search) {
                filtered = filtered.filter(gig =>
                    gig.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                    gig.description.toLowerCase().includes(filters.search.toLowerCase())
                );
            }

            return filtered;
        }

        // Build query string for API
        const params = new URLSearchParams(filters).toString();
        return dashboardApi.get(`/gig-postings?${params}`);
    },

    // POST create new gig
    async createGig(data) {
        if (USE_STATIC_DATA) {
            await new Promise(resolve => setTimeout(resolve, 400));
            const newGig = { id: Date.now().toString(), ...data };
            staticGigs.push(newGig);
            return newGig;
        }
        return dashboardApi.post('/gig-postings', data);
    },

    // PATCH update gig
    async updateGig(id, data) {
        if (USE_STATIC_DATA) {
            await new Promise(resolve => setTimeout(resolve, 400));
            const index = staticGigs.findIndex(gig => gig.id === id);
            if (index === -1) throw new Error('Gig not found');
            staticGigs[index] = { ...staticGigs[index], ...data };
            return staticGigs[index];
        }
        return dashboardApi.patch(`/gig-postings/${id}`, data);
    },

    // DELETE gig
    async deleteGig(id) {
        if (USE_STATIC_DATA) {
            await new Promise(resolve => setTimeout(resolve, 300));
            const index = staticGigs.findIndex(gig => gig.id === id);
            if (index === -1) throw new Error('Gig not found');
            staticGigs.splice(index, 1);
            return;
        }
        return dashboardApi.delete(`/gig-postings/${id}`);
    },
};