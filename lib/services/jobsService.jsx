// // src/lib/services/jobsService.js
// // Service for jobs data - switches between static and API

// import { apiClient } from '../api/client';
// import { jobs as staticJobs } from '@/components/shared/data2';

// const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA !== 'false';

// export const jobsService = {
//     // GET all jobs
//     async getJobs() {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             return staticJobs;
//         }
//         return apiClient.get('/jobs');
//     },

//     // GET single job by ID
//     async getJobById(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 200));
//             const job = staticJobs.find(job => job.id === id);
//             if (!job) throw new Error('Job not found');
//             return job;
//         }
//         return apiClient.get(`/jobs/${id}`);
//     },

//     // GET filtered jobs
//     async getFilteredJobs(filters) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             let filtered = [...staticJobs];

//             // Apply filters to static data
//             if (filters.type) {
//                 filtered = filtered.filter(job => job.type === filters.type);
//             }
//             if (filters.location) {
//                 filtered = filtered.filter(job =>
//                     job.location.toLowerCase().includes(filters.location.toLowerCase())
//                 );
//             }
//             if (filters.search) {
//                 filtered = filtered.filter(job =>
//                     job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     job.company.toLowerCase().includes(filters.search.toLowerCase())
//                 );
//             }

//             return filtered;
//         }

//         const params = new URLSearchParams(filters).toString();
//         return apiClient.get(`/jobs?${params}`);
//     },

//     // POST create new job
//     async createJob(data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const newJob = { id: Date.now().toString(), ...data };
//             staticJobs.push(newJob);
//             return newJob;
//         }
//         return apiClient.post('/jobs', data);
//     },

//     // PATCH update job
//     async updateJob(id, data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const index = staticJobs.findIndex(job => job.id === id);
//             if (index === -1) throw new Error('Job not found');
//             staticJobs[index] = { ...staticJobs[index], ...data };
//             return staticJobs[index];
//         }
//         return apiClient.patch(`/jobs/${id}`, data);
//     },

//     // DELETE job
//     async deleteJob(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             const index = staticJobs.findIndex(job => job.id === id);
//             if (index === -1) throw new Error('Job not found');
//             staticJobs.splice(index, 1);
//             return;
//         }
//         return apiClient.delete(`/jobs/${id}`);
//     },
// };


// src/lib/services/jobsService.js
// Service for jobs data - switches between static and API

// import { apiClient } from '../api/client';
// import staticJobs from '@/components/shared/data2';

// const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA !== 'false';

// export const jobsService = {
//     // GET all jobs
//     async getJobs() {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             return staticJobs;
//         }
//         return apiClient.get('/jobs');
//     },

//     // GET single job by ID
//     async getJobById(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 200));
//             const job = staticJobs.find(job => job.id === id);
//             if (!job) throw new Error('Job not found');
//             return job;
//         }
//         return apiClient.get(`/jobs/${id}`);
//     },

//     // GET filtered jobs
//     async getFilteredJobs(filters) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             let filtered = [...staticJobs];

//             // Apply filters to static data
//             if (filters.type) {
//                 filtered = filtered.filter(job => job.type === filters.type);
//             }
//             if (filters.location) {
//                 filtered = filtered.filter(job =>
//                     job.location.toLowerCase().includes(filters.location.toLowerCase())
//                 );
//             }
//             if (filters.search) {
//                 filtered = filtered.filter(job =>
//                     job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     job.company.toLowerCase().includes(filters.search.toLowerCase())
//                 );
//             }

//             return filtered;
//         }

//         const params = new URLSearchParams(filters).toString();
//         return apiClient.get(`/jobs?${params}`);
//     },

//     // POST create new job
//     async createJob(data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const newJob = { id: Date.now().toString(), ...data };
//             staticJobs.push(newJob);
//             return newJob;
//         }
//         return apiClient.post('/jobs', data);
//     },

//     // PATCH update job
//     async updateJob(id, data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const index = staticJobs.findIndex(job => job.id === id);
//             if (index === -1) throw new Error('Job not found');
//             staticJobs[index] = { ...staticJobs[index], ...data };
//             return staticJobs[index];
//         }
//         return apiClient.patch(`/jobs/${id}`, data);
//     },

//     // DELETE job
//     async deleteJob(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             const index = staticJobs.findIndex(job => job.id === id);
//             if (index === -1) throw new Error('Job not found');
//             staticJobs.splice(index, 1);
//             return;
//         }
//         return apiClient.delete(`/jobs/${id}`);
//     },
// };




// src/lib/services/jobsService.js
// Service for jobs data - switches between static and API

// import { apiClient } from '../api/client';
// import staticJobs from '@/components/shared/data2';

// const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA !== 'false';

// export const jobsService = {
//     // GET all jobs - Maps to: GET /job-postings/
//     async getJobs() {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             return staticJobs;
//         }
//         return apiClient.get('/job-postings/');
//     },

//     // GET single job by ID - Maps to: GET /job-postings/{id}/
//     async getJobById(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 200));
//             const job = staticJobs.find(job => job.id === id);
//             if (!job) throw new Error('Job not found');
//             return job;
//         }
//         return apiClient.get(`/job-postings/${id}/`);
//     },

//     // GET user's own job postings - Maps to: GET /job-postings/my-postings/
//     async getMyJobPostings() {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             // In static mode, return all jobs (or filter by some criteria)
//             return staticJobs;
//         }
//         return apiClient.get('/job-postings/my-postings/');
//     },

//     // GET filtered jobs (client-side filtering for static, server-side for API)
//     async getFilteredJobs(filters) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             let filtered = [...staticJobs];

//             // Apply filters to static data
//             if (filters.type) {
//                 filtered = filtered.filter(job => job.type === filters.type);
//             }
//             if (filters.location) {
//                 filtered = filtered.filter(job =>
//                     job.location.toLowerCase().includes(filters.location.toLowerCase())
//                 );
//             }
//             if (filters.level) {
//                 filtered = filtered.filter(job => job.level === filters.level);
//             }
//             if (filters.search) {
//                 filtered = filtered.filter(job =>
//                     job.position.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     job.description.toLowerCase().includes(filters.search.toLowerCase())
//                 );
//             }

//             return filtered;
//         }

//         // Build query string for API
//         const params = new URLSearchParams(filters).toString();
//         return apiClient.get(`/job-postings/?${params}`);
//     },

//     // POST create new job - Maps to: POST /job-postings/create/
//     async createJob(data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const newJob = { id: Date.now().toString(), ...data };
//             staticJobs.push(newJob);
//             return newJob;
//         }
//         return apiClient.post('/job-postings/create/', data);
//     },

//     // PATCH update job - Maps to: PATCH /job-postings/{id}/update/
//     async updateJob(id, data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const index = staticJobs.findIndex(job => job.id === id);
//             if (index === -1) throw new Error('Job not found');
//             staticJobs[index] = { ...staticJobs[index], ...data };
//             return staticJobs[index];
//         }
//         return apiClient.patch(`/job-postings/${id}/update/`, data);
//     },

//     // DELETE job - Maps to: DELETE /job-postings/{id}/delete/
//     async deleteJob(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             const index = staticJobs.findIndex(job => job.id === id);
//             if (index === -1) throw new Error('Job not found');
//             staticJobs.splice(index, 1);
//             return;
//         }
//         return apiClient.delete(`/job-postings/${id}/delete/`);
//     },
// };


// src/lib/services/jobsService.js
// Service for jobs data - switches between static and API






// import { apiClient } from '../api/client';
// import staticJobs from '@/components/shared/data2';

// const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA !== 'false';

// export const jobsService = {
//     // GET all jobs - Maps to: GET /job-postings/
//     async getJobs() {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             return staticJobs;
//         }

//         try {
//             return await apiClient.get('/job-postings/');
//         } catch (error) {
//             console.error('Failed to fetch jobs from API:', error.message);
//             console.warn('Falling back to static data');
//             // Fallback to static data if API fails
//             return staticJobs;
//         }
//     },

//     // GET single job by ID - Maps to: GET /job-postings/{id}/
//     async getJobById(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 200));
//             const job = staticJobs.find(job => job.id === id);
//             if (!job) throw new Error('Job not found');
//             return job;
//         }

//         try {
//             return await apiClient.get(`/job-postings/${id}/`);
//         } catch (error) {
//             console.error(`Failed to fetch job ${id} from API:`, error.message);
//             // Fallback to static data
//             const job = staticJobs.find(job => job.id === id);
//             if (!job) throw new Error('Job not found');
//             return job;
//         }
//     },

//     // GET user's own job postings - Maps to: GET /job-postings/my-postings/
//     async getMyJobPostings() {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             // In static mode, return all jobs (or filter by some criteria)
//             return staticJobs;
//         }
//         return apiClient.get('/job-postings/my-postings/');
//     },

//     // GET filtered jobs (client-side filtering for static, server-side for API)
//     async getFilteredJobs(filters) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             let filtered = [...staticJobs];

//             // Apply filters to static data
//             if (filters.type) {
//                 filtered = filtered.filter(job => job.type === filters.type);
//             }
//             if (filters.location) {
//                 filtered = filtered.filter(job =>
//                     job.location.toLowerCase().includes(filters.location.toLowerCase())
//                 );
//             }
//             if (filters.level) {
//                 filtered = filtered.filter(job => job.level === filters.level);
//             }
//             if (filters.search) {
//                 filtered = filtered.filter(job =>
//                     job.position.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     job.description.toLowerCase().includes(filters.search.toLowerCase())
//                 );
//             }

//             return filtered;
//         }

//         // Build query string for API
//         const params = new URLSearchParams(filters).toString();
//         return apiClient.get(`/job-postings/?${params}`);
//     },

//     // POST create new job - Maps to: POST /job-postings/create/
//     async createJob(data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const newJob = { id: Date.now().toString(), ...data };
//             staticJobs.push(newJob);
//             return newJob;
//         }
//         return apiClient.post('/job-postings/create/', data);
//     },

//     // PATCH update job - Maps to: PATCH /job-postings/{id}/update/
//     async updateJob(id, data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const index = staticJobs.findIndex(job => job.id === id);
//             if (index === -1) throw new Error('Job not found');
//             staticJobs[index] = { ...staticJobs[index], ...data };
//             return staticJobs[index];
//         }
//         return apiClient.patch(`/job-postings/${id}/update/`, data);
//     },

//     // DELETE job - Maps to: DELETE /job-postings/{id}/delete/
//     async deleteJob(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             const index = staticJobs.findIndex(job => job.id === id);
//             if (index === -1) throw new Error('Job not found');
//             staticJobs.splice(index, 1);
//             return;
//         }
//         return apiClient.delete(`/job-postings/${id}/delete/`);
//     },
// };




// src/lib/services/jobsService.js
// Service for jobs data - switches between static and API

// import { apiClient } from '../api/client';
// import staticJobs from '@/components/shared/data2';

// const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA !== 'false';

// export const jobsService = {
//     // GET all jobs - Maps to: GET /job-postings/
//     async getJobs() {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             return staticJobs;
//         }

//         try {
//             const response = await apiClient.get('/job-postings/');

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

//             // Format 4: Wrapped in jobs { jobs: [...] }
//             if (response && Array.isArray(response.jobs)) {
//                 return response.jobs;
//             }

//             console.error('Unexpected response format:', response);
//             // Fallback to static data if format is unexpected
//             return staticJobs;

//         } catch (error) {
//             console.error('Failed to fetch jobs from API:', error.message);
//             console.warn('Falling back to static data');
//             return staticJobs;
//         }
//     },

//     // GET single job by ID - Maps to: GET /job-postings/{id}/
//     async getJobById(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 200));
//             const job = staticJobs.find(job => job.id === id);
//             if (!job) throw new Error('Job not found');
//             return job;
//         }

//         try {
//             return await apiClient.get(`/job-postings/${id}/`);
//         } catch (error) {
//             console.error(`Failed to fetch job ${id} from API:`, error.message);
//             // Fallback to static data
//             const job = staticJobs.find(job => job.id === id);
//             if (!job) throw new Error('Job not found');
//             return job;
//         }
//     },

//     // GET user's own job postings - Maps to: GET /job-postings/my-postings/
//     async getMyJobPostings() {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             // In static mode, return all jobs (or filter by some criteria)
//             return staticJobs;
//         }
//         return apiClient.get('/job-postings/my-postings/');
//     },

//     // GET filtered jobs (client-side filtering for static, server-side for API)
//     async getFilteredJobs(filters) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             let filtered = [...staticJobs];

//             // Apply filters to static data
//             if (filters.type) {
//                 filtered = filtered.filter(job => job.type === filters.type);
//             }
//             if (filters.location) {
//                 filtered = filtered.filter(job =>
//                     job.location.toLowerCase().includes(filters.location.toLowerCase())
//                 );
//             }
//             if (filters.level) {
//                 filtered = filtered.filter(job => job.level === filters.level);
//             }
//             if (filters.search) {
//                 filtered = filtered.filter(job =>
//                     job.position.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
//                     job.description.toLowerCase().includes(filters.search.toLowerCase())
//                 );
//             }

//             return filtered;
//         }

//         // Build query string for API
//         const params = new URLSearchParams(filters).toString();
//         return apiClient.get(`/job-postings/?${params}`);
//     },

//     // POST create new job - Maps to: POST /job-postings/create/
//     async createJob(data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const newJob = { id: Date.now().toString(), ...data };
//             staticJobs.push(newJob);
//             return newJob;
//         }
//         return apiClient.post('/job-postings/create/', data);
//     },

//     // PATCH update job - Maps to: PATCH /job-postings/{id}/update/
//     async updateJob(id, data) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 400));
//             const index = staticJobs.findIndex(job => job.id === id);
//             if (index === -1) throw new Error('Job not found');
//             staticJobs[index] = { ...staticJobs[index], ...data };
//             return staticJobs[index];
//         }
//         return apiClient.patch(`/job-postings/${id}/update/`, data);
//     },

//     // DELETE job - Maps to: DELETE /job-postings/{id}/delete/
//     async deleteJob(id) {
//         if (USE_STATIC_DATA) {
//             await new Promise(resolve => setTimeout(resolve, 300));
//             const index = staticJobs.findIndex(job => job.id === id);
//             if (index === -1) throw new Error('Job not found');
//             staticJobs.splice(index, 1);
//             return;
//         }
//         return apiClient.delete(`/job-postings/${id}/delete/`);
//     },
// };


// src/lib/services/jobsService.js
// Service for jobs data - switches between static and API

// import { apiClient } from '../api/client';
import { dashboardApi } from '@/lib/api/dashboard';
import staticJobs from '@/components/dashboard/shared/data2';

const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA !== 'false';

export const jobsService = {
    // GET all jobs - Maps to: GET /job-postings/
    async getJobs() {
        if (USE_STATIC_DATA) {
            await new Promise(resolve => setTimeout(resolve, 300));
            return staticJobs;
        }

        try {
            const response = await dashboardApi.get('/job-postings/');

            console.log('Raw API response:', response); // Debug log

            // Handle different response formats from backend
            // Format 1: Direct array [...]
            if (Array.isArray(response)) {
                console.log('✅ Jobs: Direct array format');
                return response;
            }

            // Format 2: Paginated with results { results: [...], count: 10, next: null }
            // This is what your Django REST Framework returns!
            if (response && Array.isArray(response.results)) {
                console.log('✅ Jobs: Paginated format with results array');
                return response.results;
            }

            // Format 3: Wrapped in data { data: [...] }
            if (response && Array.isArray(response.data)) {
                console.log('✅ Jobs: Data wrapper format');
                return response.data;
            }

            // Format 4: Wrapped in jobs { jobs: [...] }
            if (response && Array.isArray(response.jobs)) {
                console.log('✅ Jobs: Jobs wrapper format');
                return response.jobs;
            }

            console.error('❌ Unexpected response format:', response);
            console.error('Available keys:', Object.keys(response || {}));
            // Fallback to static data if format is unexpected
            return staticJobs;

        } catch (error) {
            console.error('Failed to fetch jobs from API:', error.message);
            console.warn('Falling back to static data');
            return staticJobs;
        }
    },

    // GET single job by ID - Maps to: GET /job-postings/{id}/
    async getJobById(id) {
        if (USE_STATIC_DATA) {
            await new Promise(resolve => setTimeout(resolve, 200));
            const job = staticJobs.find(job => job.id === id);
            if (!job) throw new Error('Job not found');
            return job;
        }

        try {
            return await dashboardApi.get(`/job-postings/${id}/`);
        } catch (error) {
            console.error(`Failed to fetch job ${id} from API:`, error.message);
            // Fallback to static data
            const job = staticJobs.find(job => job.id === id);
            if (!job) throw new Error('Job not found');
            return job;
        }
    },

    // GET user's own job postings - Maps to: GET /job-postings/my-postings/
    async getMyJobPostings() {
        if (USE_STATIC_DATA) {
            await new Promise(resolve => setTimeout(resolve, 300));
            // In static mode, return all jobs (or filter by some criteria)
            return staticJobs;
        }
        return dashboardApi.get('/job-postings/my-postings/');
    },

    // GET filtered jobs (client-side filtering for static, server-side for API)
    async getFilteredJobs(filters) {
        if (USE_STATIC_DATA) {
            await new Promise(resolve => setTimeout(resolve, 300));
            let filtered = [...staticJobs];

            // Apply filters to static data
            if (filters.type) {
                filtered = filtered.filter(job => job.type === filters.type);
            }
            if (filters.location) {
                filtered = filtered.filter(job =>
                    job.location.toLowerCase().includes(filters.location.toLowerCase())
                );
            }
            if (filters.level) {
                filtered = filtered.filter(job => job.level === filters.level);
            }
            if (filters.search) {
                filtered = filtered.filter(job =>
                    job.position.toLowerCase().includes(filters.search.toLowerCase()) ||
                    job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
                    job.description.toLowerCase().includes(filters.search.toLowerCase())
                );
            }

            return filtered;
        }

        // Build query string for API
        const params = new URLSearchParams(filters).toString();
        return dashboardApi.get(`/job-postings/?${params}`);
    },

    // POST create new job - Maps to: POST /job-postings/create/
    async createJob(data) {
        if (USE_STATIC_DATA) {
            await new Promise(resolve => setTimeout(resolve, 400));
            const newJob = { id: Date.now().toString(), ...data };
            staticJobs.push(newJob);
            return newJob;
        }
        return dashboardApi.post('/job-postings/create/', data);
    },

    // PATCH update job - Maps to: PATCH /job-postings/{id}/update/
    async updateJob(id, data) {
        if (USE_STATIC_DATA) {
            await new Promise(resolve => setTimeout(resolve, 400));
            const index = staticJobs.findIndex(job => job.id === id);
            if (index === -1) throw new Error('Job not found');
            staticJobs[index] = { ...staticJobs[index], ...data };
            return staticJobs[index];
        }
        return dashboardApi.patch(`/job-postings/${id}/update/`, data);
    },

    // DELETE job - Maps to: DELETE /job-postings/{id}/delete/
    async deleteJob(id) {
        if (USE_STATIC_DATA) {
            await new Promise(resolve => setTimeout(resolve, 300));
            const index = staticJobs.findIndex(job => job.id === id);
            if (index === -1) throw new Error('Job not found');
            staticJobs.splice(index, 1);
            return;
        }
        return dashboardApi.delete(`/job-postings/${id}/delete/`);
    },
};