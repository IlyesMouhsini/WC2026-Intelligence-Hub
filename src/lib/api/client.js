import axios from 'axios';
import { PUBLIC_API_URL } from '$env/static/public';

export const apiClient = axios.create({
	baseURL: PUBLIC_API_URL,
	headers: {
		Accept: 'application/ld+json'
	}
});