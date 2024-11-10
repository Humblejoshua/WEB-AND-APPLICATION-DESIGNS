// Simulating a database of users
const usersDB = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com', active: true },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com', active: false },
    { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com', active: true },
    { id: 4, name: 'David', age: 28, email: 'david@example.com', active: true },
    { id: 5, name: 'Eve', age: 22, email: 'eve@example.com', active: false },
];

// Simulating an API call to fetch user data
const fetchUser Data = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(usersDB);
        }, 1000);
    });
};

// Function to process user data
const processUser Data = async () => {
    try {
        // Fetching user data
        const users = await fetchUser Data();

        // Filtering active users and transforming data
        const activeUsersSummary = users
            .filter(user => user.active)
            .map(user => ({
                id: user.id,
                name: user.name,
                email: user.email,
                ageCategory: user.age < 30 ? 'Young' : 'Adult',
                accountStatus: 'Active'
            }));

        // Sorting users by name
        activeUsersSummary.sort((a, b) => a.name.localeCompare(b.name));

        // Creating a summary report
        const summaryReport = {
            totalUsers: users.length,
            activeUsersCount: activeUsersSummary.length,
            activeUsers: activeUsersSummary
        };

        return summaryReport;

    } catch (error) {
        console.error("Error processing user data:", error);
        throw new Error("Failed to process user data.");
    }
};

// Function to display the summary report
const displaySummary = async () => {
    try {
        const summary = await processUser Data();
        console.log("Summary Report:", JSON.stringify(summary, null, 2));
    } catch (error) {
        console.error("Error displaying summary:", error);
    }
};

// Execute the display function
displaySummary();