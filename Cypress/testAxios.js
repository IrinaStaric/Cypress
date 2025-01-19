const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const performGetRequests = async () => {
    try {
        const response1 = await axios.get(`${BASE_URL}/posts/1`);
        console.log('GET Request 1:', response1.data);

        const response2 = await axios.get(`${BASE_URL}/users/1`);
        console.log('GET Request 2:', response2.data);

        const response3 = await axios.get(`${BASE_URL}/comments/1`);
        console.log('GET Request 3:', response3.data);

        const response4 = await axios.get(`${BASE_URL}/todos/1`);
        console.log('GET Request 4:', response4.data);

        const response5 = await axios.get(`${BASE_URL}/albums/1`);
        console.log('GET Request 5:', response5.data);
    } catch (error) {
        console.error('Error with GET requests:', error);
    }
};

const performPostRequests = async () => {
    try {
        const response1 = await axios.post(`${BASE_URL}/posts`, {
            title: 'Test 1',
            body: 'Test comment 1',
            userId: 1,
        });
        console.log('POST Request 1:', response1.data);

        const response2 = await axios.post(`${BASE_URL}/posts`, {
            title: 'Test 2',
            body: 'Test comment 2',
            userId: 1,
        });
        console.log('POST Request 2:', response2.data);

        const response3 = await axios.post(`${BASE_URL}/posts`, {
            title: 'Test 3',
            body: 'Test comment 3',
            userId: 1,
        });
        console.log('POST Request 3:', response3.data);

        const response4 = await axios.post(`${BASE_URL}/posts`, {
            title: 'Test 4',
            body: 'Test comment 4',
            userId: 1,
        });
        console.log('POST Request 4:', response4.data);

        const response5 = await axios.post(`${BASE_URL}/posts`, {
            title: 'Test 5',
            body: 'Test comment 5',
            userId: 1,
        });
        console.log('POST Request 5:', response5.data);
    } catch (error) {
        console.error('Error with POST requests:', error);
    }
};
