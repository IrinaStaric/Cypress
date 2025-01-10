function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => console.log('Error fetching todo:', error));
}

function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => console.log('Error fetching user:', error));
}

Promise.all([getTodo(), getUser()])
    .then(([todo, user]) => {
        console.log('Both data:', todo, user);
    })
    .catch(error => console.log('Error in Promise.all:', error));

Promise.race([getTodo(), getUser()])
    .then(data => {
        console.log('First data:', data);
    })
    .catch(error => console.log('Error in Promise.race:', error));
