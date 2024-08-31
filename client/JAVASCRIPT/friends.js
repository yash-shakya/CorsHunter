const friends = [
    {
        name: 'John Doe',
        coins_count: 6,
    },
    {
        name: 'Jane Smith',
        coins_count: 8,
    },
];
function generateFriendCards() {
    const container = document.getElementById('friends-container');
    friends.forEach(friend => {
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