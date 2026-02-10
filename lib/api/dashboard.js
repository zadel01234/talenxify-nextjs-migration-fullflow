// import { apiFetch } from "./http";

// /**
//  * Dashboard API
//  * All endpoints that require authentication for the dashboard
//  */
// export const dashboardApi = {
//     // ==========================================
//     // GIGS / JOBS
//     // ==========================================

//     /**
//      * Get all gigs/jobs
//      * @param {Object} filters - Optional filters (status, skill, etc.)
//      * @returns {Promise<Array>} List of gigs
//      */
//     async getGigs(filters = {}) {
//         const queryParams = new URLSearchParams(filters).toString();
//         const endpoint = queryParams ? `/gigs/?${queryParams}` : `/gigs/`;
//         return apiFetch(endpoint, { auth: true });
//     },

//     /**
//      * Get a single gig by ID
//      * @param {string|number} id - Gig ID
//      * @returns {Promise<Object>} Gig details
//      */
//     async getGigById(id) {
//         return apiFetch(`/gigs/${id}/`, { auth: true });
//     },

//     /**
//      * Create a new gig
//      * @param {Object} payload - Gig data
//      * @returns {Promise<Object>} Created gig
//      */
//     async createGig(payload) {
//         return apiFetch("/gigs/", {
//             method: "POST",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Update an existing gig
//      * @param {string|number} id - Gig ID
//      * @param {Object} payload - Updated gig data
//      * @returns {Promise<Object>} Updated gig
//      */
//     async updateGig(id, payload) {
//         return apiFetch(`/gigs/${id}/`, {
//             method: "PATCH",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Delete a gig
//      * @param {string|number} id - Gig ID
//      * @returns {Promise<void>}
//      */
//     async deleteGig(id) {
//         return apiFetch(`/gigs/${id}/`, {
//             method: "DELETE",
//             auth: true,
//         });
//     },

//     /**
//      * Search gigs
//      * @param {string} query - Search query
//      * @param {Object} filters - Additional filters
//      * @returns {Promise<Array>} Search results
//      */
//     async searchGigs(query, filters = {}) {
//         const params = { q: query, ...filters };
//         const queryParams = new URLSearchParams(params).toString();
//         return apiFetch(`/gigs/search/?${queryParams}`, { auth: true });
//     },

//     // ==========================================
//     // USER PROFILE
//     // ==========================================

//     /**
//      * Get current user profile
//      * @returns {Promise<Object>} User profile data
//      */
//     async getProfile() {
//         return apiFetch("/account/profile/", { auth: true });
//     },

//     /**
//      * Update user profile
//      * @param {Object} payload - Profile data to update
//      * @returns {Promise<Object>} Updated profile
//      */
//     async updateProfile(payload) {
//         return apiFetch("/account/profile/", {
//             method: "PATCH",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Upload profile photo
//      * @param {File} file - Image file
//      * @returns {Promise<Object>} Updated profile with photo URL
//      */
//     async uploadProfilePhoto(file) {
//         const formData = new FormData();
//         formData.append("photo", file);

//         return apiFetch("/account/profile/photo/", {
//             method: "POST",
//             body: formData,
//             auth: true,
//             headers: {
//                 // Remove Content-Type to let browser set it with boundary for FormData
//                 "Content-Type": undefined,
//             },
//         });
//     },

//     /**
//      * Get user settings
//      * @returns {Promise<Object>} User settings
//      */
//     async getSettings() {
//         return apiFetch("/account/settings/", { auth: true });
//     },

//     /**
//      * Update user settings
//      * @param {Object} payload - Settings to update
//      * @returns {Promise<Object>} Updated settings
//      */
//     async updateSettings(payload) {
//         return apiFetch("/account/settings/", {
//             method: "PATCH",
//             body: payload,
//             auth: true,
//         });
//     },

//     // ==========================================
//     // APPLICATIONS
//     // ==========================================

//     /**
//      * Get all applications
//      * @param {Object} filters - Optional filters (status, gig_id, etc.)
//      * @returns {Promise<Array>} List of applications
//      */
//     async getApplications(filters = {}) {
//         const queryParams = new URLSearchParams(filters).toString();
//         const endpoint = queryParams ? `/applications/?${queryParams}` : `/applications/`;
//         return apiFetch(endpoint, { auth: true });
//     },

//     /**
//      * Get a single application by ID
//      * @param {string|number} id - Application ID
//      * @returns {Promise<Object>} Application details
//      */
//     async getApplicationById(id) {
//         return apiFetch(`/applications/${id}/`, { auth: true });
//     },

//     /**
//      * Create a new application
//      * @param {Object} payload - Application data (gig_id, cover_letter, etc.)
//      * @returns {Promise<Object>} Created application
//      */
//     async createApplication(payload) {
//         return apiFetch("/applications/", {
//             method: "POST",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Update an application
//      * @param {string|number} id - Application ID
//      * @param {Object} payload - Updated application data
//      * @returns {Promise<Object>} Updated application
//      */
//     async updateApplication(id, payload) {
//         return apiFetch(`/applications/${id}/`, {
//             method: "PATCH",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Withdraw an application
//      * @param {string|number} id - Application ID
//      * @returns {Promise<void>}
//      */
//     async withdrawApplication(id) {
//         return apiFetch(`/applications/${id}/withdraw/`, {
//             method: "POST",
//             auth: true,
//         });
//     },

//     // ==========================================
//     // MESSAGES
//     // ==========================================

//     /**
//      * Get all messages/conversations
//      * @returns {Promise<Array>} List of conversations
//      */
//     async getMessages() {
//         return apiFetch("/messages/", { auth: true });
//     },

//     /**
//      * Get messages for a specific conversation
//      * @param {string|number} conversationId - Conversation ID
//      * @returns {Promise<Array>} List of messages
//      */
//     async getConversation(conversationId) {
//         return apiFetch(`/messages/${conversationId}/`, { auth: true });
//     },

//     /**
//      * Send a message
//      * @param {Object} payload - Message data (receiver_id, content, etc.)
//      * @returns {Promise<Object>} Sent message
//      */
//     async sendMessage(payload) {
//         return apiFetch("/messages/", {
//             method: "POST",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Mark messages as read
//      * @param {string|number} conversationId - Conversation ID
//      * @returns {Promise<Object>} Updated conversation
//      */
//     async markAsRead(conversationId) {
//         return apiFetch(`/messages/${conversationId}/read/`, {
//             method: "POST",
//             auth: true,
//         });
//     },

//     /**
//      * Delete a conversation
//      * @param {string|number} conversationId - Conversation ID
//      * @returns {Promise<void>}
//      */
//     async deleteConversation(conversationId) {
//         return apiFetch(`/messages/${conversationId}/`, {
//             method: "DELETE",
//             auth: true,
//         });
//     },

//     // ==========================================
//     // PAYMENTS
//     // ==========================================

//     /**
//      * Get payment history
//      * @param {Object} filters - Optional filters (status, date_range, etc.)
//      * @returns {Promise<Array>} List of payments
//      */
//     async getPayments(filters = {}) {
//         const queryParams = new URLSearchParams(filters).toString();
//         const endpoint = queryParams ? `/payments/?${queryParams}` : `/payments/`;
//         return apiFetch(endpoint, { auth: true });
//     },

//     /**
//      * Get a single payment by ID
//      * @param {string|number} id - Payment ID
//      * @returns {Promise<Object>} Payment details
//      */
//     async getPaymentById(id) {
//         return apiFetch(`/payments/${id}/`, { auth: true });
//     },

//     /**
//      * Create a payment
//      * @param {Object} payload - Payment data (amount, gig_id, etc.)
//      * @returns {Promise<Object>} Created payment
//      */
//     async createPayment(payload) {
//         return apiFetch("/payments/", {
//             method: "POST",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Get wallet balance
//      * @returns {Promise<Object>} Wallet information
//      */
//     async getWallet() {
//         return apiFetch("/payments/wallet/", { auth: true });
//     },

//     /**
//      * Withdraw funds
//      * @param {Object} payload - Withdrawal data (amount, bank_details, etc.)
//      * @returns {Promise<Object>} Withdrawal request
//      */
//     async withdrawFunds(payload) {
//         return apiFetch("/payments/withdraw/", {
//             method: "POST",
//             body: payload,
//             auth: true,
//         });
//     },

//     // ==========================================
//     // PORTFOLIO
//     // ==========================================

//     /**
//      * Get user portfolio items
//      * @returns {Promise<Array>} List of portfolio items
//      */
//     async getPortfolio() {
//         return apiFetch("/portfolio/", { auth: true });
//     },

//     /**
//      * Get a single portfolio item
//      * @param {string|number} id - Portfolio item ID
//      * @returns {Promise<Object>} Portfolio item details
//      */
//     async getPortfolioItem(id) {
//         return apiFetch(`/portfolio/${id}/`, { auth: true });
//     },

//     /**
//      * Create a portfolio item
//      * @param {Object} payload - Portfolio data (title, description, images, etc.)
//      * @returns {Promise<Object>} Created portfolio item
//      */
//     async createPortfolioItem(payload) {
//         return apiFetch("/portfolio/", {
//             method: "POST",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Update a portfolio item
//      * @param {string|number} id - Portfolio item ID
//      * @param {Object} payload - Updated portfolio data
//      * @returns {Promise<Object>} Updated portfolio item
//      */
//     async updatePortfolioItem(id, payload) {
//         return apiFetch(`/portfolio/${id}/`, {
//             method: "PATCH",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Delete a portfolio item
//      * @param {string|number} id - Portfolio item ID
//      * @returns {Promise<void>}
//      */
//     async deletePortfolioItem(id) {
//         return apiFetch(`/portfolio/${id}/`, {
//             method: "DELETE",
//             auth: true,
//         });
//     },

//     /**
//      * Upload portfolio files
//      * @param {string|number} id - Portfolio item ID
//      * @param {File[]} files - Array of files to upload
//      * @returns {Promise<Object>} Updated portfolio item
//      */
//     async uploadPortfolioFiles(id, files) {
//         const formData = new FormData();
//         files.forEach((file, index) => {
//             formData.append(`file_${index}`, file);
//         });

//         return apiFetch(`/portfolio/${id}/upload/`, {
//             method: "POST",
//             body: formData,
//             auth: true,
//             headers: {
//                 "Content-Type": undefined,
//             },
//         });
//     },

//     // ==========================================
//     // RESUME / CV
//     // ==========================================

//     /**
//      * Get user resume/CV
//      * @returns {Promise<Object>} Resume data
//      */
//     async getResume() {
//         return apiFetch("/account/resume/", { auth: true });
//     },

//     /**
//      * Update resume/CV
//      * @param {Object} payload - Resume data
//      * @returns {Promise<Object>} Updated resume
//      */
//     async updateResume(payload) {
//         return apiFetch("/account/resume/", {
//             method: "PATCH",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Upload resume file
//      * @param {File} file - Resume file (PDF, DOC, etc.)
//      * @returns {Promise<Object>} Upload response
//      */
//     async uploadResume(file) {
//         const formData = new FormData();
//         formData.append("resume", file);

//         return apiFetch("/account/resume/upload/", {
//             method: "POST",
//             body: formData,
//             auth: true,
//             headers: {
//                 "Content-Type": undefined,
//             },
//         });
//     },

//     // ==========================================
//     // SUPPORT / TICKETS
//     // ==========================================

//     /**
//      * Get support tickets
//      * @param {Object} filters - Optional filters (status, priority, etc.)
//      * @returns {Promise<Array>} List of support tickets
//      */
//     async getSupportTickets(filters = {}) {
//         const queryParams = new URLSearchParams(filters).toString();
//         const endpoint = queryParams ? `/support/?${queryParams}` : `/support/`;
//         return apiFetch(endpoint, { auth: true });
//     },

//     /**
//      * Get a single support ticket
//      * @param {string|number} id - Ticket ID
//      * @returns {Promise<Object>} Ticket details
//      */
//     async getSupportTicket(id) {
//         return apiFetch(`/support/${id}/`, { auth: true });
//     },

//     /**
//      * Create a support ticket
//      * @param {Object} payload - Ticket data (subject, description, category, etc.)
//      * @returns {Promise<Object>} Created ticket
//      */
//     async createSupportTicket(payload) {
//         return apiFetch("/support/", {
//             method: "POST",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Reply to a support ticket
//      * @param {string|number} id - Ticket ID
//      * @param {Object} payload - Reply data (message, attachments, etc.)
//      * @returns {Promise<Object>} Updated ticket
//      */
//     async replySupportTicket(id, payload) {
//         return apiFetch(`/support/${id}/reply/`, {
//             method: "POST",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Close a support ticket
//      * @param {string|number} id - Ticket ID
//      * @returns {Promise<Object>} Closed ticket
//      */
//     async closeSupportTicket(id) {
//         return apiFetch(`/support/${id}/close/`, {
//             method: "POST",
//             auth: true,
//         });
//     },

//     // ==========================================
//     // NOTIFICATIONS
//     // ==========================================

//     /**
//      * Get all notifications
//      * @param {Object} filters - Optional filters (read, type, etc.)
//      * @returns {Promise<Array>} List of notifications
//      */
//     async getNotifications(filters = {}) {
//         const queryParams = new URLSearchParams(filters).toString();
//         const endpoint = queryParams ? `/notifications/?${queryParams}` : `/notifications/`;
//         return apiFetch(endpoint, { auth: true });
//     },

//     /**
//      * Mark notification as read
//      * @param {string|number} id - Notification ID
//      * @returns {Promise<Object>} Updated notification
//      */
//     async markNotificationAsRead(id) {
//         return apiFetch(`/notifications/${id}/read/`, {
//             method: "POST",
//             auth: true,
//         });
//     },

//     /**
//      * Mark all notifications as read
//      * @returns {Promise<Object>} Update result
//      */
//     async markAllNotificationsAsRead() {
//         return apiFetch("/notifications/read-all/", {
//             method: "POST",
//             auth: true,
//         });
//     },

//     /**
//      * Delete a notification
//      * @param {string|number} id - Notification ID
//      * @returns {Promise<void>}
//      */
//     async deleteNotification(id) {
//         return apiFetch(`/notifications/${id}/`, {
//             method: "DELETE",
//             auth: true,
//         });
//     },

//     // ==========================================
//     // ANALYTICS / STATS
//     // ==========================================

//     /**
//      * Get dashboard statistics
//      * @param {Object} filters - Optional filters (date_range, etc.)
//      * @returns {Promise<Object>} Dashboard stats
//      */
//     async getDashboardStats(filters = {}) {
//         const queryParams = new URLSearchParams(filters).toString();
//         const endpoint = queryParams ? `/stats/dashboard/?${queryParams}` : `/stats/dashboard/`;
//         return apiFetch(endpoint, { auth: true });
//     },

//     /**
//      * Get gig performance analytics
//      * @param {string|number} gigId - Gig ID
//      * @returns {Promise<Object>} Gig analytics
//      */
//     async getGigAnalytics(gigId) {
//         return apiFetch(`/stats/gigs/${gigId}/`, { auth: true });
//     },

//     /**
//      * Get earnings report
//      * @param {Object} filters - Filters (start_date, end_date, etc.)
//      * @returns {Promise<Object>} Earnings data
//      */
//     async getEarningsReport(filters = {}) {
//         const queryParams = new URLSearchParams(filters).toString();
//         const endpoint = queryParams ? `/stats/earnings/?${queryParams}` : `/stats/earnings/`;
//         return apiFetch(endpoint, { auth: true });
//     },

//     // ==========================================
//     // POST JOB (For Recruiters/Hirers)
//     // ==========================================

//     /**
//      * Get posted jobs (for recruiters)
//      * @returns {Promise<Array>} List of posted jobs
//      */
//     async getPostedJobs() {
//         return apiFetch("/jobs/posted/", { auth: true });
//     },

//     /**
//      * Post a new job
//      * @param {Object} payload - Job data
//      * @returns {Promise<Object>} Created job
//      */
//     async postJob(payload) {
//         return apiFetch("/jobs/", {
//             method: "POST",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Update posted job
//      * @param {string|number} id - Job ID
//      * @param {Object} payload - Updated job data
//      * @returns {Promise<Object>} Updated job
//      */
//     async updatePostedJob(id, payload) {
//         return apiFetch(`/jobs/${id}/`, {
//             method: "PATCH",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Delete posted job
//      * @param {string|number} id - Job ID
//      * @returns {Promise<void>}
//      */
//     async deletePostedJob(id) {
//         return apiFetch(`/jobs/${id}/`, {
//             method: "DELETE",
//             auth: true,
//         });
//     },

//     /**
//      * Get applicants for a job
//      * @param {string|number} jobId - Job ID
//      * @returns {Promise<Array>} List of applicants
//      */
//     async getJobApplicants(jobId) {
//         return apiFetch(`/jobs/${jobId}/applicants/`, { auth: true });
//     },

//     /**
//      * Update applicant status
//      * @param {string|number} jobId - Job ID
//      * @param {string|number} applicantId - Applicant ID
//      * @param {Object} payload - Status update (status: 'accepted' | 'rejected' | 'shortlisted')
//      * @returns {Promise<Object>} Updated applicant
//      */
//     async updateApplicantStatus(jobId, applicantId, payload) {
//         return apiFetch(`/jobs/${jobId}/applicants/${applicantId}/`, {
//             method: "PATCH",
//             body: payload,
//             auth: true,
//         });
//     },

//     // ==========================================
//     // ORGANIZATION (For Recruiters)
//     // ==========================================

//     /**
//      * Get organization details
//      * @returns {Promise<Object>} Organization data
//      */
//     async getOrganization() {
//         return apiFetch("/organization/", { auth: true });
//     },

//     /**
//      * Update organization details
//      * @param {Object} payload - Organization data
//      * @returns {Promise<Object>} Updated organization
//      */
//     async updateOrganization(payload) {
//         return apiFetch("/organization/", {
//             method: "PATCH",
//             body: payload,
//             auth: true,
//         });
//     },

//     /**
//      * Upload organization logo
//      * @param {File} file - Logo file
//      * @returns {Promise<Object>} Updated organization with logo URL
//      */
//     async uploadOrganizationLogo(file) {
//         const formData = new FormData();
//         formData.append("logo", file);

//         return apiFetch("/organization/logo/", {
//             method: "POST",
//             body: formData,
//             auth: true,
//             headers: {
//                 "Content-Type": undefined,
//             },
//         });
//     },
// };





import { apiFetch } from "./http";

/**
 * Dashboard API
 * All endpoints that require authentication for the dashboard
 */
export const dashboardApi = {
    // ==========================================
    // GIGS (Freelance/Short-term work)
    // ==========================================

    /**
     * Get all gig postings
     * @param {Object} filters - Optional filters
     * @param {string} filters.search - Search in title and description
     * @param {string} filters.category - Filter by category
     * @param {string} filters.experience_level - Filter by experience level
     * @param {string} filters.location_type - Filter by location type (remote, onsite, hybrid)
     * @param {string} filters.ordering - Order by field (created_at, -created_at, budget_min, -budget_min, applications_count, -applications_count)
     * @param {number} filters.page - Page number
     * @param {number} filters.page_size - Number of results per page
     * @returns {Promise<Array>} List of gig postings
     */
    async getGigs(filters = {}) {
        const queryParams = new URLSearchParams(filters).toString();
        const endpoint = queryParams ? `/gig-postings/?${queryParams}` : `/gig-postings/`;
        return apiFetch(endpoint, { auth: true });
    },

    /**
     * Get a single gig by ID (automatically increments view count)
     * @param {string} id - Gig ID (UUID)
     * @returns {Promise<Object>} Gig posting details
     */
    async getGigById(id) {
        return apiFetch(`/gig-postings/${id}/`, { auth: true });
    },

    // ==========================================
    // JOBS (Full-time/Part-time positions)
    // ==========================================

    /**
     * Get all job postings
     * @param {Object} filters - Optional filters
     * @param {string} filters.search - Search in title and description
     * @param {string} filters.category - Filter by category
     * @param {string} filters.job_type - Filter by job type (full_time, part_time, contract, temporary, internship)
     * @param {string} filters.experience_level - Filter by experience level
     * @param {string} filters.location_type - Filter by location type
     * @param {string} filters.ordering - Order by field
     * @param {number} filters.page - Page number
     * @param {number} filters.page_size - Number of results per page
     * @returns {Promise<Array>} List of job postings
     */
    async getJobs(filters = {}) {
        const queryParams = new URLSearchParams(filters).toString();
        const endpoint = queryParams ? `/job-postings/?${queryParams}` : `/job-postings/`;
        return apiFetch(endpoint, { auth: true });
    },

    /**
     * Get a single job by ID (automatically increments view count)
     * @param {string} id - Job ID (UUID)
     * @returns {Promise<Object>} Job posting details
     */
    async getJobById(id) {
        return apiFetch(`/job-postings/${id}/`, { auth: true });
    },

    // ==========================================
    // FOR RECRUITERS - Job/Gig Posting Management
    // ==========================================

    /**
     * Create a new job or gig posting (Recruiters only)
     * @param {Object} payload - Job/Gig data
     * @param {string} payload.job_or_gig - 'job' or 'gig'
     * @param {string} payload.title - Job/Gig title
     * @param {string} payload.category - Category
     * @param {string} payload.job_type - Job type (for jobs only)
     * @param {string} payload.experience_level - Experience level required
     * @param {string} payload.location_type - remote, onsite, or hybrid
     * @param {string} payload.address - Physical address (if onsite/hybrid)
     * @param {string} payload.budget_min - Minimum budget
     * @param {string} payload.budget_max - Maximum budget
     * @param {string} payload.budget_currency - Currency code (USD, NGN, EUR, etc.)
     * @param {string} payload.description - Detailed description
     * @param {Array<string>} payload.skills_required - List of required skills
     * @param {string} payload.responsibilities - Job responsibilities
     * @param {string} payload.qualifications - Required qualifications
     * @param {string} payload.benefits - Benefits offered
     * @param {string} payload.duration - Expected duration (e.g., '2 weeks', '3 months')
     * @param {string} payload.start_date - Start date (YYYY-MM-DD)
     * @param {string} payload.application_deadline - Deadline (YYYY-MM-DD)
     * @param {boolean} payload.is_active - Whether posting is active
     * @returns {Promise<Object>} Created job/gig posting
     */
    async createJobPosting(payload) {
        return apiFetch("/job-postings/create/", {
            method: "POST",
            body: payload,
            auth: true,
        });
    },

    /**
     * Get all job postings created by the authenticated recruiter
     * Shows both active and inactive postings
     * @returns {Promise<Array>} List of recruiter's job postings
     */
    async getMyJobPostings() {
        return apiFetch("/job-postings/my-postings/", { auth: true });
    },

    /**
     * Update a job posting (Owner only)
     * @param {string} id - Job posting ID (UUID)
     * @param {Object} payload - Fields to update (same as createJobPosting)
     * @returns {Promise<Object>} Updated job posting
     */
    async updateJobPosting(id, payload) {
        return apiFetch(`/job-postings/${id}/update/`, {
            method: "PATCH",
            body: payload,
            auth: true,
        });
    },

    /**
     * Soft delete a job posting (sets is_active to false)
     * @param {string} id - Job posting ID (UUID)
     * @returns {Promise<void>}
     */
    async deleteJobPosting(id) {
        return apiFetch(`/job-postings/${id}/delete/`, {
            method: "DELETE",
            auth: true,
        });
    },

    // ==========================================
    // USER PROFILE
    // ==========================================

    /**
     * Get current user profile
     * @returns {Promise<Object>} User profile data
     */
    async getProfile() {
        return apiFetch("/account/profile/", { auth: true });
    },

    /**
     * Update user profile
     * @param {Object} payload - Profile data to update
     * @returns {Promise<Object>} Updated profile
     */
    async updateProfile(payload) {
        return apiFetch("/account/profile/", {
            method: "PATCH",
            body: payload,
            auth: true,
        });
    },

    /**
     * Upload profile photo
     * @param {File} file - Image file
     * @returns {Promise<Object>} Updated profile with photo URL
     */
    async uploadProfilePhoto(file) {
        const formData = new FormData();
        formData.append("photo", file);

        return apiFetch("/account/profile/photo/", {
            method: "POST",
            body: formData,
            auth: true,
            headers: {
                // Remove Content-Type to let browser set it with boundary for FormData
                "Content-Type": undefined,
            },
        });
    },

    /**
     * Get user settings
     * @returns {Promise<Object>} User settings
     */
    async getSettings() {
        return apiFetch("/account/settings/", { auth: true });
    },

    /**
     * Update user settings
     * @param {Object} payload - Settings to update
     * @returns {Promise<Object>} Updated settings
     */
    async updateSettings(payload) {
        return apiFetch("/account/settings/", {
            method: "PATCH",
            body: payload,
            auth: true,
        });
    },

    // ==========================================
    // APPLICATIONS
    // ==========================================

    /**
     * Get all applications
     * @param {Object} filters - Optional filters (status, gig_id, etc.)
     * @returns {Promise<Array>} List of applications
     */
    async getApplications(filters = {}) {
        const queryParams = new URLSearchParams(filters).toString();
        const endpoint = queryParams ? `/applications/?${queryParams}` : `/applications/`;
        return apiFetch(endpoint, { auth: true });
    },

    /**
     * Get a single application by ID
     * @param {string|number} id - Application ID
     * @returns {Promise<Object>} Application details
     */
    async getApplicationById(id) {
        return apiFetch(`/applications/${id}/`, { auth: true });
    },

    /**
     * Create a new application
     * @param {Object} payload - Application data (gig_id, cover_letter, etc.)
     * @returns {Promise<Object>} Created application
     */
    async createApplication(payload) {
        return apiFetch("/applications/", {
            method: "POST",
            body: payload,
            auth: true,
        });
    },

    /**
     * Update an application
     * @param {string|number} id - Application ID
     * @param {Object} payload - Updated application data
     * @returns {Promise<Object>} Updated application
     */
    async updateApplication(id, payload) {
        return apiFetch(`/applications/${id}/`, {
            method: "PATCH",
            body: payload,
            auth: true,
        });
    },

    /**
     * Withdraw an application
     * @param {string|number} id - Application ID
     * @returns {Promise<void>}
     */
    async withdrawApplication(id) {
        return apiFetch(`/applications/${id}/withdraw/`, {
            method: "POST",
            auth: true,
        });
    },

    // ==========================================
    // MESSAGES
    // ==========================================

    /**
     * Get all messages/conversations
     * @returns {Promise<Array>} List of conversations
     */
    async getMessages() {
        return apiFetch("/messages/", { auth: true });
    },

    /**
     * Get messages for a specific conversation
     * @param {string|number} conversationId - Conversation ID
     * @returns {Promise<Array>} List of messages
     */
    async getConversation(conversationId) {
        return apiFetch(`/messages/${conversationId}/`, { auth: true });
    },

    /**
     * Send a message
     * @param {Object} payload - Message data (receiver_id, content, etc.)
     * @returns {Promise<Object>} Sent message
     */
    async sendMessage(payload) {
        return apiFetch("/messages/", {
            method: "POST",
            body: payload,
            auth: true,
        });
    },

    /**
     * Mark messages as read
     * @param {string|number} conversationId - Conversation ID
     * @returns {Promise<Object>} Updated conversation
     */
    async markAsRead(conversationId) {
        return apiFetch(`/messages/${conversationId}/read/`, {
            method: "POST",
            auth: true,
        });
    },

    /**
     * Delete a conversation
     * @param {string|number} conversationId - Conversation ID
     * @returns {Promise<void>}
     */
    async deleteConversation(conversationId) {
        return apiFetch(`/messages/${conversationId}/`, {
            method: "DELETE",
            auth: true,
        });
    },

    // ==========================================
    // PAYMENTS
    // ==========================================

    /**
     * Get payment history
     * @param {Object} filters - Optional filters (status, date_range, etc.)
     * @returns {Promise<Array>} List of payments
     */
    async getPayments(filters = {}) {
        const queryParams = new URLSearchParams(filters).toString();
        const endpoint = queryParams ? `/payments/?${queryParams}` : `/payments/`;
        return apiFetch(endpoint, { auth: true });
    },

    /**
     * Get a single payment by ID
     * @param {string|number} id - Payment ID
     * @returns {Promise<Object>} Payment details
     */
    async getPaymentById(id) {
        return apiFetch(`/payments/${id}/`, { auth: true });
    },

    /**
     * Create a payment
     * @param {Object} payload - Payment data (amount, gig_id, etc.)
     * @returns {Promise<Object>} Created payment
     */
    async createPayment(payload) {
        return apiFetch("/payments/", {
            method: "POST",
            body: payload,
            auth: true,
        });
    },

    /**
     * Get wallet balance
     * @returns {Promise<Object>} Wallet information
     */
    async getWallet() {
        return apiFetch("/payments/wallet/", { auth: true });
    },

    /**
     * Withdraw funds
     * @param {Object} payload - Withdrawal data (amount, bank_details, etc.)
     * @returns {Promise<Object>} Withdrawal request
     */
    async withdrawFunds(payload) {
        return apiFetch("/payments/withdraw/", {
            method: "POST",
            body: payload,
            auth: true,
        });
    },

    // ==========================================
    // PORTFOLIO
    // ==========================================

    /**
     * Get user portfolio items
     * @returns {Promise<Array>} List of portfolio items
     */
    async getPortfolio() {
        return apiFetch("/portfolio/", { auth: true });
    },

    /**
     * Get a single portfolio item
     * @param {string|number} id - Portfolio item ID
     * @returns {Promise<Object>} Portfolio item details
     */
    async getPortfolioItem(id) {
        return apiFetch(`/portfolio/${id}/`, { auth: true });
    },

    /**
     * Create a portfolio item
     * @param {Object} payload - Portfolio data (title, description, images, etc.)
     * @returns {Promise<Object>} Created portfolio item
     */
    async createPortfolioItem(payload) {
        return apiFetch("/portfolio/", {
            method: "POST",
            body: payload,
            auth: true,
        });
    },

    /**
     * Update a portfolio item
     * @param {string|number} id - Portfolio item ID
     * @param {Object} payload - Updated portfolio data
     * @returns {Promise<Object>} Updated portfolio item
     */
    async updatePortfolioItem(id, payload) {
        return apiFetch(`/portfolio/${id}/`, {
            method: "PATCH",
            body: payload,
            auth: true,
        });
    },

    /**
     * Delete a portfolio item
     * @param {string|number} id - Portfolio item ID
     * @returns {Promise<void>}
     */
    async deletePortfolioItem(id) {
        return apiFetch(`/portfolio/${id}/`, {
            method: "DELETE",
            auth: true,
        });
    },

    /**
     * Upload portfolio files
     * @param {string|number} id - Portfolio item ID
     * @param {File[]} files - Array of files to upload
     * @returns {Promise<Object>} Updated portfolio item
     */
    async uploadPortfolioFiles(id, files) {
        const formData = new FormData();
        files.forEach((file, index) => {
            formData.append(`file_${index}`, file);
        });

        return apiFetch(`/portfolio/${id}/upload/`, {
            method: "POST",
            body: formData,
            auth: true,
            headers: {
                "Content-Type": undefined,
            },
        });
    },

    // ==========================================
    // RESUME / CV
    // ==========================================

    /**
     * Get user resume/CV
     * @returns {Promise<Object>} Resume data
     */
    async getResume() {
        return apiFetch("/account/resume/", { auth: true });
    },

    /**
     * Update resume/CV
     * @param {Object} payload - Resume data
     * @returns {Promise<Object>} Updated resume
     */
    async updateResume(payload) {
        return apiFetch("/account/resume/", {
            method: "PATCH",
            body: payload,
            auth: true,
        });
    },

    /**
     * Upload resume file
     * @param {File} file - Resume file (PDF, DOC, etc.)
     * @returns {Promise<Object>} Upload response
     */
    async uploadResume(file) {
        const formData = new FormData();
        formData.append("resume", file);

        return apiFetch("/account/resume/upload/", {
            method: "POST",
            body: formData,
            auth: true,
            headers: {
                "Content-Type": undefined,
            },
        });
    },

    // ==========================================
    // SUPPORT / TICKETS
    // ==========================================

    /**
     * Get support tickets
     * @param {Object} filters - Optional filters (status, priority, etc.)
     * @returns {Promise<Array>} List of support tickets
     */
    async getSupportTickets(filters = {}) {
        const queryParams = new URLSearchParams(filters).toString();
        const endpoint = queryParams ? `/support/?${queryParams}` : `/support/`;
        return apiFetch(endpoint, { auth: true });
    },

    /**
     * Get a single support ticket
     * @param {string|number} id - Ticket ID
     * @returns {Promise<Object>} Ticket details
     */
    async getSupportTicket(id) {
        return apiFetch(`/support/${id}/`, { auth: true });
    },

    /**
     * Create a support ticket
     * @param {Object} payload - Ticket data (subject, description, category, etc.)
     * @returns {Promise<Object>} Created ticket
     */
    async createSupportTicket(payload) {
        return apiFetch("/support/", {
            method: "POST",
            body: payload,
            auth: true,
        });
    },

    /**
     * Reply to a support ticket
     * @param {string|number} id - Ticket ID
     * @param {Object} payload - Reply data (message, attachments, etc.)
     * @returns {Promise<Object>} Updated ticket
     */
    async replySupportTicket(id, payload) {
        return apiFetch(`/support/${id}/reply/`, {
            method: "POST",
            body: payload,
            auth: true,
        });
    },

    /**
     * Close a support ticket
     * @param {string|number} id - Ticket ID
     * @returns {Promise<Object>} Closed ticket
     */
    async closeSupportTicket(id) {
        return apiFetch(`/support/${id}/close/`, {
            method: "POST",
            auth: true,
        });
    },

    // ==========================================
    // NOTIFICATIONS
    // ==========================================

    /**
     * Get all notifications
     * @param {Object} filters - Optional filters (read, type, etc.)
     * @returns {Promise<Array>} List of notifications
     */
    async getNotifications(filters = {}) {
        const queryParams = new URLSearchParams(filters).toString();
        const endpoint = queryParams ? `/notifications/?${queryParams}` : `/notifications/`;
        return apiFetch(endpoint, { auth: true });
    },

    /**
     * Mark notification as read
     * @param {string|number} id - Notification ID
     * @returns {Promise<Object>} Updated notification
     */
    async markNotificationAsRead(id) {
        return apiFetch(`/notifications/${id}/read/`, {
            method: "POST",
            auth: true,
        });
    },

    /**
     * Mark all notifications as read
     * @returns {Promise<Object>} Update result
     */
    async markAllNotificationsAsRead() {
        return apiFetch("/notifications/read-all/", {
            method: "POST",
            auth: true,
        });
    },

    /**
     * Delete a notification
     * @param {string|number} id - Notification ID
     * @returns {Promise<void>}
     */
    async deleteNotification(id) {
        return apiFetch(`/notifications/${id}/`, {
            method: "DELETE",
            auth: true,
        });
    },

    // ==========================================
    // ANALYTICS / STATS
    // ==========================================

    /**
     * Get dashboard statistics
     * @param {Object} filters - Optional filters (date_range, etc.)
     * @returns {Promise<Object>} Dashboard stats
     */
    async getDashboardStats(filters = {}) {
        const queryParams = new URLSearchParams(filters).toString();
        const endpoint = queryParams ? `/stats/dashboard/?${queryParams}` : `/stats/dashboard/`;
        return apiFetch(endpoint, { auth: true });
    },

    /**
     * Get gig performance analytics
     * @param {string|number} gigId - Gig ID
     * @returns {Promise<Object>} Gig analytics
     */
    async getGigAnalytics(gigId) {
        return apiFetch(`/stats/gigs/${gigId}/`, { auth: true });
    },

    /**
     * Get earnings report
     * @param {Object} filters - Filters (start_date, end_date, etc.)
     * @returns {Promise<Object>} Earnings data
     */
    async getEarningsReport(filters = {}) {
        const queryParams = new URLSearchParams(filters).toString();
        const endpoint = queryParams ? `/stats/earnings/?${queryParams}` : `/stats/earnings/`;
        return apiFetch(endpoint, { auth: true });
    },

    // ==========================================
    // ORGANIZATION (For Recruiters)
    // ==========================================

    /**
     * Get organization details
     * @returns {Promise<Object>} Organization data
     */
    async getOrganization() {
        return apiFetch("/organization/", { auth: true });
    },

    /**
     * Update organization details
     * @param {Object} payload - Organization data
     * @returns {Promise<Object>} Updated organization
     */
    async updateOrganization(payload) {
        return apiFetch("/organization/", {
            method: "PATCH",
            body: payload,
            auth: true,
        });
    },

    /**
     * Upload organization logo
     * @param {File} file - Logo file
     * @returns {Promise<Object>} Updated organization with logo URL
     */
    async uploadOrganizationLogo(file) {
        const formData = new FormData();
        formData.append("logo", file);

        return apiFetch("/organization/logo/", {
            method: "POST",
            body: formData,
            auth: true,
            headers: {
                "Content-Type": undefined,
            },
        });
    },
};