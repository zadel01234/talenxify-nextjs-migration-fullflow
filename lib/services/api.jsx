// // API Service Layer
// // All data fetching functions should go through this service
// // This makes it easy to swap mock data with real API calls later

// import {
//     mockUserData,
//     mockWalletData,
//     mockApplicationStats,
//     mockProfileCompletion,
//     mockApplications,
// } from '@/data/mockData';

// // Simulate network delay
// const simulateDelay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// // TODO: API INTEGRATION - Replace with actual API endpoint
// export const fetchUserData = async () => {
//     await simulateDelay();
//     // return fetch('/api/user').then(res => res.json());
//     return mockUserData;
// };

// // TODO: API INTEGRATION - Replace with actual API endpoint
// export const fetchWalletData = async () => {
//     await simulateDelay();
//     // return fetch('/api/wallet').then(res => res.json());
//     return mockWalletData;
// };

// // TODO: API INTEGRATION - Replace with actual API endpoint
// export const fetchApplicationStats = async () => {
//     await simulateDelay();
//     // return fetch('/api/applications/stats').then(res => res.json());
//     return mockApplicationStats;
// };

// // TODO: API INTEGRATION - Replace with actual API endpoint
// export const fetchProfileCompletion = async () => {
//     await simulateDelay();
//     // return fetch('/api/profile/completion').then(res => res.json());
//     return mockProfileCompletion;
// };

// // TODO: API INTEGRATION - Replace with actual API endpoint
// export const fetchApplications = async () => {
//     await simulateDelay();
//     // return fetch('/api/applications').then(res => res.json());
//     return mockApplications;
// };

// // TODO: API INTEGRATION - Implement withdrawal functionality
// export const withdrawFunds = async (amount) => {
//     await simulateDelay(500);
//     // return fetch('/api/wallet/withdraw', {
//     //   method: 'POST',
//     //   body: JSON.stringify({ amount }),
//     //   headers: { 'Content-Type': 'application/json' }
//     // }).then(res => res.json());

//     console.log('Withdrawing:', amount);
//     return { success: true, message: 'Withdrawal initiated' };
// };

// // TODO: API INTEGRATION - Implement profile update functionality
// export const updateProfile = async (profileData) => {
//     await simulateDelay(500);
//     // return fetch('/api/profile', {
//     //   method: 'PUT',
//     //   body: JSON.stringify(profileData),
//     //   headers: { 'Content-Type': 'application/json' }
//     // }).then(res => res.json());

//     console.log('Updating profile:', profileData);
//     return { success: true, message: 'Profile updated' };
// };

// // TODO: API INTEGRATION - Implement application details fetch
// export const fetchApplicationDetails = async (applicationId) => {
//     await simulateDelay();
//     // return fetch(`/api/applications/${applicationId}`).then(res => res.json());

//     const application = mockApplications.find(app => app.id === applicationId);
//     return application || null;
// };




// import { apiClient } from '@/lib/apiClient';

// // Remove mock data imports
// // import { mockUserData, ... } from '@/data/mockData';

// // ✅ REAL API IMPLEMENTATION
// export const fetchUserData = async () => {
//     try {
//         return await apiClient.get('/api/user');
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//         throw error;
//     }
// };

// export const fetchWalletData = async () => {
//     try {
//         return await apiClient.get('/api/wallet');
//     } catch (error) {
//         console.error('Error fetching wallet data:', error);
//         throw error;
//     }
// };

// export const fetchApplicationStats = async () => {
//     try {
//         return await apiClient.get('/api/applications/stats');
//     } catch (error) {
//         console.error('Error fetching stats:', error);
//         throw error;
//     }
// };

// export const fetchProfileCompletion = async () => {
//     try {
//         return await apiClient.get('/api/profile/completion');
//     } catch (error) {
//         console.error('Error fetching profile completion:', error);
//         throw error;
//     }
// };

// export const fetchApplications = async () => {
//     try {
//         return await apiClient.get('/api/applications');
//     } catch (error) {
//         console.error('Error fetching applications:', error);
//         throw error;
//     }
// };

// export const withdrawFunds = async (amount) => {
//     try {
//         return await apiClient.post('/api/wallet/withdraw', { amount });
//     } catch (error) {
//         console.error('Error withdrawing funds:', error);
//         throw error;
//     }
// };

// export const updateProfile = async (profileData) => {
//     try {
//         return await apiClient.put('/api/profile', profileData);
//     } catch (error) {
//         console.error('Error updating profile:', error);
//         throw error;
//     }
// };

// export const fetchApplicationDetails = async (applicationId) => {
//     try {
//         return await apiClient.get(`/api/applications/${applicationId}`);
//     } catch (error) {
//         console.error('Error fetching application details:', error);
//         throw error;
//     }
// };


// API Service Layer
// Centralized data fetching with easy API integration

// import {
//     mockUser,
//     mockWallet,
//     mockStats,
//     mockProfileCompletion,
//     mockApplications,
// } from '@/data/mockData';

// // Base API configuration
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// // Helper function to simulate API delay
// const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// // Generic fetch wrapper for API calls
// async function apiRequest(endpoint, options = {}) {
//     // TODO: API INTEGRATION - Replace with actual API calls
//     // const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //     'Authorization': `Bearer ${getToken()}`,
//     //     ...options.headers,
//     //   },
//     //   ...options,
//     // });
//     //
//     // if (!response.ok) {
//     //   throw new Error(`API Error: ${response.status}`);
//     // }
//     //
//     // return response.json();

//     // For now, return mock data
//     await delay();
//     return null;
// }

// // User API
// export const userApi = {
//     // Get current user data
//     getUser: async () => {
//         // TODO: API INTEGRATION
//         // return apiRequest('/user');
//         await delay();
//         return mockUser;
//     },

//     // Update user profile
//     updateUser: async (data) => {
//         // TODO: API INTEGRATION
//         // return apiRequest('/user', {
//         //   method: 'PUT',
//         //   body: JSON.stringify(data),
//         // });
//         await delay();
//         return { success: true, data };
//     },
// };

// // Wallet API
// export const walletApi = {
//     // Get wallet balance
//     getWallet: async () => {
//         // TODO: API INTEGRATION
//         // return apiRequest('/wallet');
//         await delay();
//         return mockWallet;
//     },

//     // Initiate withdrawal
//     withdraw: async (amount) => {
//         // TODO: API INTEGRATION
//         // return apiRequest('/wallet/withdraw', {
//         //   method: 'POST',
//         //   body: JSON.stringify({ amount }),
//         // });
//         await delay();
//         return {
//             success: true,
//             transactionId: `TXN${Date.now()}`,
//             amount,
//         };
//     },
// };

// // Applications API
// export const applicationsApi = {
//     // Get application statistics
//     getStats: async () => {
//         // TODO: API INTEGRATION
//         // return apiRequest('/applications/stats');
//         await delay();
//         return mockStats;
//     },

//     // Get all applications
//     getApplications: async () => {
//         // TODO: API INTEGRATION
//         // return apiRequest('/applications');
//         await delay();
//         return mockApplications;
//     },

//     // Get single application details
//     getApplication: async (id) => {
//         // TODO: API INTEGRATION
//         // return apiRequest(`/applications/${id}`);
//         await delay();
//         return mockApplications.find(app => app.id === id);
//     },
// };

// // Profile API
// export const profileApi = {
//     // Get profile completion status
//     getProfileCompletion: async () => {
//         // TODO: API INTEGRATION
//         // return apiRequest('/profile/completion');
//         await delay();
//         return mockProfileCompletion;
//     },

//     // Update profile field
//     updateProfileField: async (field, value) => {
//         // TODO: API INTEGRATION
//         // return apiRequest('/profile/field', {
//         //   method: 'PUT',
//         //   body: JSON.stringify({ field, value }),
//         // });
//         await delay();
//         return { success: true, field, value };
//     },
// };


// API Service Layer
// Centralized data fetching with easy API integration

import {
    mockUser,
    mockWallet,
    mockStats,
    mockProfileCompletion,
    mockApplications,
} from '@/data/mockData';

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Helper function to simulate API delay
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// Generic fetch wrapper for API calls
async function apiRequest(endpoint, options = {}) {
    // TODO: API INTEGRATION - Replace with actual API calls
    // const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${getToken()}`,
    //     ...options.headers,
    //   },
    //   ...options,
    // });
    // 
    // if (!response.ok) {
    //   throw new Error(`API Error: ${response.status}`);
    // }
    // 
    // return response.json();

    // For now, return mock data
    await delay();
    return null;
}

// User API
export const userApi = {
    // Get current user data
    getUser: async () => {
        // TODO: API INTEGRATION
        // return apiRequest('/user');
        await delay();
        return mockUser;
    },

    // Update user profile
    updateUser: async (data) => {
        // TODO: API INTEGRATION
        // return apiRequest('/user', {
        //   method: 'PUT',
        //   body: JSON.stringify(data),
        // });
        await delay();
        return { success: true, data };
    },
};

// Wallet API
export const walletApi = {
    // Get wallet balance
    getWallet: async () => {
        // TODO: API INTEGRATION
        // return apiRequest('/wallet');
        await delay();
        return mockWallet;
    },

    // Initiate withdrawal
    withdraw: async (amount) => {
        // TODO: API INTEGRATION
        // return apiRequest('/wallet/withdraw', {
        //   method: 'POST',
        //   body: JSON.stringify({ amount }),
        // });
        await delay();
        return {
            success: true,
            transactionId: `TXN${Date.now()}`,
            amount,
        };
    },
};

// Applications API
export const applicationsApi = {
    // Get application statistics
    getStats: async () => {
        // TODO: API INTEGRATION
        // return apiRequest('/applications/stats');
        await delay();
        return mockStats;
    },

    // Get all applications
    getApplications: async () => {
        // TODO: API INTEGRATION
        // return apiRequest('/applications');
        await delay();
        return mockApplications;
    },

    // Get single application details
    getApplication: async (id) => {
        // TODO: API INTEGRATION
        // return apiRequest(`/applications/${id}`);
        await delay();
        return mockApplications.find(app => app.id === id);
    },
};

// Profile API
export const profileApi = {
    // Get profile completion status
    getProfileCompletion: async () => {
        // TODO: API INTEGRATION
        // return apiRequest('/profile/completion');
        await delay();
        return mockProfileCompletion;
    },

    // Update profile field
    updateProfileField: async (field, value) => {
        // TODO: API INTEGRATION
        // return apiRequest('/profile/field', {
        //   method: 'PUT',
        //   body: JSON.stringify({ field, value }),
        // });
        await delay();
        return { success: true, field, value };
    },
};