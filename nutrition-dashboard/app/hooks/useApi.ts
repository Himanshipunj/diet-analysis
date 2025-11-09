import { useState } from 'react';

const API_BASE = "https://diet-processor-func-dnfzf2bvcpbrf4by.westus2-01.azurewebsites.net/api/diet-processor";

interface ApiResponse<T = any> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const showError = (message: string) => {
    setError(message);
    setTimeout(() => setError(null), 5000);
  };

  const apiCall = async (endpoint: string, params: Record<string, any> = {}) => {
    try {
      const url = new URL(API_BASE + endpoint);
      Object.keys(params).forEach(key => {
        if (params[key]) url.searchParams.append(key, params[key]);
      });
      
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return await response.json();
    } catch (error: any) {
      console.error('API Error:', error);
      showError(`API Error: ${error.message}`);
      throw error;
    }
  };

  return {
    loading,
    error,
    setLoading,
    apiCall,
    showError
  };
};

export { API_BASE };