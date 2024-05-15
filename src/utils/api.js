// api/auth.js
import axios from 'axios';

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post('https://reqres.in/api/login', { username, password });
        // Assuming the API returns a success field indicating whether the login was successful
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};
