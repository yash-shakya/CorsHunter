const workouts = [
    {
        category: '#Legs',
        name: 'Back Squat',
        sets: 5,
        reps: 15,
        weight: '30 kg',
        time: '60 mins'
    },
    {
        category: '#Arms',
        name: 'Bicep Curl',
        sets: 4,
        reps: 12,
        weight: '15 kg',
        time: '45 mins'
    },
];
function generateWorkoutCards() {
    const container = document.getElementById('workout-container');
    workouts.forEach(workout => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <p>${workout.category}</p>
            <h2>${workout.name}</h2>
            <p>Count: ${workout.sets} sets X ${workout.reps} reps</p>
            <div class="info">
                <i class="fas fa-weight"></i>
                <p>${workout.weight}</p>
            </div>
            <div class="info">
                <i class="fas fa-clock"></i>
                <p>${workout.time}</p>
            </div>
        `;
        container.appendChild(card);
    });
}
generateWorkoutCards();
