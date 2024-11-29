const readline = require('readline');

// Create an interface for reading input and writing output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to determine speed status and calculate demerit points
function speedDetector() {
    rl.question('Enter the speed of the car: ', (input) => {
        const speed = parseInt(input); // Convert input to a number

        // Validate the input
        if (isNaN(speed) || speed < 0) {
            console.log('Invalid input. Please enter a valid speed.');
        } else if (speed <= 70) {
            console.log('Ok'); // Speed is within the limit
        } else {
            // Calculate demerit points
            const points = Math.floor((speed - 70) / 5);
            console.log(`Points: ${points}`);

            // Check if license should be suspended
            if (points > 12) {
                console.log('License suspended');
            }
        }

        rl.close(); // Close the input interface
    });
}

// Call the function to start the program
speedDetector();
