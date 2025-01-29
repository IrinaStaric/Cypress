const axios = require('axios');
const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/invalid-url');
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

fetchData();
