const rewards = [
    {
        title: 'Amazon $25 Gift Card',
        buttonText: 'Claim'
    },
    {
        title: 'Protein Shake',
        buttonText: 'Claim'
    },
];
function generateRewardCards() {
    const container = document.getElementById('rewards-container');
    rewards.forEach(reward => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${reward.title}</h2>
            <button class="coupons">${reward.buttonText}</button>
        `;
        container.appendChild(card);
    });
}
generateRewardCards();