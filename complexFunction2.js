// Simulating a database of users
const usersDB = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com', active: true, registrationDate: '2021-01-01', lastLogin: '2023-10-01' },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com', active: false, registrationDate: '2020-05-15', lastLogin: '2023-09-15' },
    { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com', active: true, registrationDate: '2019-03-20', lastLogin: '2023-10-05' },
    { id: 4, name: 'David', age: 28, email: 'david@example.com', active: true, registrationDate: '2022-07-10', lastLogin: '2023-10-03' },
    { id: 5, name: 'Eve', age: 22, email: 'eve@example.com', active: false, registrationDate: '2021-11-11', lastLogin: '2023-08-20' },
];

// Simulating an API call to fetch user data
const fetchUser Data = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usersDB);
        }, 1000);
    });
};

// Simulating an API call to update user data
const updateUser Data = async (userId, newData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userIndex = usersDB.findIndex(user => user.id === userId);
            if (userIndex !== -1) {
                usersDB[userIndex] = { ...usersDB[userIndex], ...newData };
                resolve(usersDB[userIndex]);
            } else {
                reject(new Error('User  not found'));
            }
        }, 500);
    });
};

// Function to process user data and generate a report
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
                registrationDate: user.registrationDate,
                lastLogin: user.lastLogin,
                accountStatus: 'Active'
            }));

        // Sorting users by last login date
        activeUsersSummary.sort((a, b) => new Date(b.lastLogin) - new Date(a.lastLogin));

        // Creating a detailed report
        const detailedReport = {
            totalUsers: users.length,
            activeUsersCount: activeUsersSummary.length,
            activeUsers: activeUsersSummary,
            inactiveUsersCount: users.length - activeUsersSummary.length,
            lastActiveDate: activeUsersSummary.length > 0 ? activeUsersSummary[0].lastLogin : null,
            reportGeneratedAt: new Date().toISOString()
        };

        return detailedReport;

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

// Function to register a new user
const registerUser  = async (newUser ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!newUser .name || !newUser .email) {
                return reject(new Error("Name and email are required"));
            }
            const newId = usersDB.length ? Math.max(usersDB.map(user => user.id)) + 1 : 1;
            const user = {
                id: newId,
                ...newUser ,
                active: true,
                registrationDate: new Date().toISOString().split('T')[0],
                lastLogin: new Date().toISOString().split('T')[0]
            };
            usersDB.push(user);
            resolve(user);
        }, 500);
    });
};

// Function to update user information
const