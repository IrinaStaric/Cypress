async function getTodoAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await response.json();
    } catch (error) {
        console.log('Error fetching todo:', error);
    }
}

async function getUserAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
    } catch (error) {
        console.log('Error fetching user:', error);
    }
}

async function fetchAll() {
    try {
        const [todo, user] = await Promise.all([getTodoAsync(), getUserAsync()]);
        console.log('Both data:', todo, user);
    } catch (error) {
        console.log('Error in Promise.all:', error);
    }
}

async function fetchRace() {
    try {
        const data = await Promise.race([getTodoAsync(), getUserAsync()]);
        console.log('First data:', data);
    } catch (error) {
        console.log('Error in Promise.race:', error);
    }
}

fetchAll();
fetchRace();
