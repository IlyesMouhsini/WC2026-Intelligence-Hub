import { apiClient } from './client';

export async function getRencontres() {
	const response = await apiClient.get('/rencontres');
	return response.data.member; // API Platform renvoie les résultats dans "member"
}