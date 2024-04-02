// api.js

// Function to fetch available reservation times for a given date
export const fetchAPI = async (date) => {
    try {
        // Simulate fetching available times from a server
        // You can replace this with an actual API call to your backend
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const availableTimes = [
                    '12:00 PM',
                    '1:00 PM',
                    '2:00 PM',
                    '6:00 PM',
                    '7:00 PM',
                    '8:00 PM'
                ];
                resolve(availableTimes);
            }, 1000); // Simulate delay for demonstration purposes
        });
        return response;
    } catch (error) {
        console.error('Error fetching available times:', error);
        throw new Error('Failed to fetch available times');
    }
};

// Function to submit a reservation request
export const submitAPI = async (formData) => {
    try {
        // Simulate submitting reservation data to a server
        // You can replace this with an actual API call to your backend
        console.log('Submitting reservation:', formData);
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate successful submission
                resolve(true);
            }, 1000); // Simulate delay for demonstration purposes
        });
        return true; // Return true indicating successful submission
    } catch (error) {
        console.error('Error submitting reservation:', error);
        throw new Error('Failed to submit reservation');
    }
};
