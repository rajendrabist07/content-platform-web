import { apiFetch } from './api';
import type { Post, PaginatedResponse } from '../types';

export async function fetchPosts(token: string) {
    const res = await apiFetch<PaginatedResponse<Post>>('/posts', { token });
    return res;
}