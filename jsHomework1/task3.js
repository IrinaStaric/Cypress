function divide(numerator, denominator) {
    try {
        if (typeof numerator !== 'number' || typeof denominator !== 'number') {
            throw new Error('Both values should be numbers');
        }
        if (denominator === 0) {
            throw new Error('Cannot divide by zero');
        }
        console.log(numerator / denominator);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('Work completed');
    }
}
divide(10, 2);  
divide(10, 0);  
divide(10, 'a');

