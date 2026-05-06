const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const authService = {
  login: async (email, password) => {
    // console.log(email, password);
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    // console.log(response);
    

    if (!response.ok) {
      throw new Error('Invalid email or password');
    }

    return response.json();
  },
};