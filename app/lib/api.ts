const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface ApiOptions extends RequestInit {
    token?: string;
}

export async function apiFetch<T>(path: string, options: ApiOptions = {}): Promise<T> {
    const { token, headers, ...rest } = options;

    const response = await fetch(`${API_URL}${path}`, {
        ...rest,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...headers,
        },
    });


    if (response.status === 204) {
        return undefined as T;
    }

    const data = await response.json();

    if (!response.ok) {

        throw new Error(data.message || 'Something went wrong');
    }

    return data;
}