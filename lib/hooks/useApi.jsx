// Custom React Query hooks for data fetching
// These hooks provide caching, refetching, and loading states

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    userApi,
    walletApi,
    applicationsApi,
    profileApi,
} from '@/lib/services/api';

// Query keys for cache management
export const queryKeys = {
    user: ['user'],
    wallet: ['wallet'],
    stats: ['applications', 'stats'],
    applications: ['applications'],
    application: (id) => ['applications', id],
    profileCompletion: ['profile', 'completion'],
};

// User hooks
export function useUser() {
    return useQuery({
        queryKey: queryKeys.user,
        queryFn: userApi.getUser,
        staleTime: 1 * 60 * 1000, // 1 minute
    });
}

// Wallet hooks
export function useWallet() {
    return useQuery({
        queryKey: queryKeys.wallet,
        queryFn: walletApi.getWallet,
        staleTime: 1 * 60 * 1000, // 1 minute
    });
}

export function useWithdraw() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: walletApi.withdraw,
        onSuccess: () => {
            // Invalidate wallet query to refetch updated balance
            queryClient.invalidateQueries({ queryKey: queryKeys.wallet });
        },
    });
}

// Applications hooks
export function useApplicationStats() {
    return useQuery({
        queryKey: queryKeys.stats,
        queryFn: applicationsApi.getStats,
        staleTime: 1 * 60 * 1000, // 1 minutes
    });
}

export function useApplications() {
    return useQuery({
        queryKey: queryKeys.applications,
        queryFn: applicationsApi.getApplications,
        staleTime: 1 * 60 * 1000, // 1 minutes
    });
}

export function useApplication(id) {
    return useQuery({
        queryKey: queryKeys.application(id),
        queryFn: () => applicationsApi.getApplication(id),
        enabled: !!id,
    });
}

// Profile hooks
export function useProfileCompletion() {
    return useQuery({
        queryKey: queryKeys.profileCompletion,
        queryFn: profileApi.getProfileCompletion,
        staleTime: 2 * 60 * 1000, // 2 minutes
    });
}