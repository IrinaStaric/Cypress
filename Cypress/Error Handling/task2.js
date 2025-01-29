const axios = require('axios');

const fetchDataWithHeadersAndParams = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'Authorization': 'Bearer token123',
            },
            params: {
                userId: 1,
            }
        });

        console.log('Response data:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

fetchDataWithHeadersAndParams();
