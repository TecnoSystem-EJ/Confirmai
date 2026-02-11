import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Injeta o Token automaticamente se ele existir
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    // salvar o token com o prefixo 'confirmai.' para evitar conflitos com outros tokens
    const token = localStorage.getItem('confirmai.token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Se der erro 401 (Sessão Inválida), desloga
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {

        console.warn("Sessão expirada ou inválida");
      }
    }
    return Promise.reject(error);
  }
);

export default api;