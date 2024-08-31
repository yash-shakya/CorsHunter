const friends = [
    {
        name: 'John Doe',
        workoutCount: 6,
        weight: '30 kg',
        caloriesBurned: 150
    },
    {
        name: 'Jane Smith',
        workoutCount: 8,
        weight: '25 kg',
        caloriesBurned: 200
    },
];
function generateFriendCards() {
    const container = document.getElementById('friends-container');
    friends.forEach(friend => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${friend.name}</h2>
            <p>Workout Count: ${friend.workoutCount}</p>
            <div class="info">
                <i class="fas fa-weight"></i>
                <p>${friend.weight}</p>
            </div>
            <div class="info">
                <i class="fas fa-clock"></i>
                <p>Calories burned: ${friend.caloriesBurned}</p>
            </div>
        `;
        container.appendChild(card);
    });
}
generateFriendCards();