try {
    const response = await fetch('http://localhost:5001/friends/leaderboard');
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const leaderboard = await response.json();
    console.log(leaderboard);
} catch (error) {
    console.error('Error fetching leaderboard:', error);
}

function generateFriendCards() {
    const container = document.getElementById('friends-container');
    leaderboard.forEach(friend => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${friend.name}</h2>
            <p>Coins: ${friend.coins_count}</p>
        `;
        container.appendChild(card);
    });
}
generateFriendCards();