// pullguardian-frontend/src/lib/api.ts
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const repositoryAPI = {
  getRepositories: () => api.get('/repositories'),
  getRepository: (id: string) => api.get(`/repositories/${id}`),
  analyzePullRequest: (repoId: string, prNumber: number) => 
    api.post(`/repositories/${repoId}/analyze/${prNumber}`),
  getSecurityIssues: (repoId: string) => 
    api.get(`/repositories/${repoId}/security-issues`),
};