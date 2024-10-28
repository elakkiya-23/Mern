async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];
        displayUser(user);
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

function displayUser(user) {
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `
        <p><strong>Name:</strong>${user.name.first} ${user.name.last}</p>
        <p><strong>Gender:</strong>${user.gender}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
    `;
}

// Event listener for the button
document.getElementById('generateBtn').addEventListener('click', fetchUser);

// Fetch a user on page load
fetchUser();
