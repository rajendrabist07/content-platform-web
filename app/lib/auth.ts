import { apiFetch } from './api';
import type { AuthResponse, ApiSuccessResponse } from '../types';
import type { RegisterInput } from './validation';

export async function register(input: RegisterInput) {
    const res = await apiFetch<ApiSuccessResponse<AuthResponse>>('/auth/register', {
        method: 'POST',
        body: JSON.stringify(input),
    });
    return res.data;
}

export async function login(input: { email: string; password: string }) {
    const res = await apiFetch<ApiSuccessResponse<AuthResponse>>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(input),
    });
    return res.data;
}

export function saveTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
}

export function getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
}

export function clearTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}