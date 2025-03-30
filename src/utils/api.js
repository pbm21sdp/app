import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

if (process.env.NODE_ENV === 'development') {
  api.interceptors.response.use((response) => {
    if (response.config.url === '/api/animals') {
      return {
        data: [
          {
            id: 1,
            name: "Buddy",
            breed: "Golden Retriever",
            age: 3,
            weight: 28,
            status: "Available",
            photos: ["/golden-retriever.jpg"],
            description: "Friendly and energetic, loves playing fetch"
          },
        ],
        status: 200,
      };
    }
    return response;
  });
}

export default api;