const axios = require('axios');

jest.mock('axios');

const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
};
describe('Mocking Axios in Jest', () => {
    it('should fetch data successfully', async () => {
        axios.get.mockResolvedValue({ data: { id: 1, title: 'Test post' } });

        const data = await fetchData();
        expect(data).toEqual({ id: 1, title: 'Test post' });
    });
    it('should handle error when fetching data', async () => {
        axios.get.mockRejectedValue(new Error('Error fetching data'));

        try {
            await fetchData();
        } catch (error) {
            expect(error.message).toBe('Error fetching data');
        }
    });
});

