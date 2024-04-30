import axios from 'axios';

const USER_ENDPOINT = `${import.meta.env.VITE_REACT_APP_API_ENDPOINT}/user`;


export const addStoryApi = async ({ values, token }) => {
	try {
		const response = await axios.post(
			`${USER_ENDPOINT}/stories`,
			{
				...values,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log('response from server:', response);

		return response.data;
	} catch (error) {
		console.log('inside catch');
		throw new Error(error.response?.data?.error?.message || 'something went wrong');
	}
};


export const getUserStoriesApi = async ({ token }) => {
	try {
		const response = await axios.get(
			`${USER_ENDPOINT}/stories`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		return response.data;
	} catch (error) {
		throw new Error(error.response?.data?.error?.message || 'something went wrong');
	}
};
