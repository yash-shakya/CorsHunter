// Define the data
const dashboardData = {
    calories: {
        value: 13500.00,
        unit: 'kcal',
        percentage: '+10%'
    },
    workout: {
        value: 6
    },
    average: {
        value: 13500.00,
        unit: 'kcal',
        percentage: '+10%'
    },
    pie: {
        segments: [
            { color: '#007bff', percentage: 55 },
            { color: '#ccc', percentage: 45 }
        ]
    }
};

function updateDashboard() {
    // Update Calories Container
    document.getElementById('caloriesValue').textContent = dashboardData.calories.value;
    document.getElementById('caloriesUnit').textContent = dashboardData.calories.unit;
    document.getElementById('caloriesPercentage').textContent = dashboardData.calories.percentage;

    // Update Workout Container
    document.getElementById('workoutValue').textContent = dashboardData.workout.value;

    // Update Average Container
    document.getElementById('averageValue').textContent = dashboardData.average.value;
    document.getElementById('averageUnit').textContent = dashboardData.average.unit;
    document.getElementById('averagePercentage').textContent = dashboardData.average.percentage;

    // Update Pie Chart
    const pieChartContainer = document.getElementById('pieChart');
    const pieSegments = dashboardData.pie.segments;
    let gradientString = 'conic-gradient(';
    let currentPercentage = 0;

    pieSegments.forEach((segment, index) => {
        const nextPercentage = currentPercentage + segment.percentage;
        gradientString += `${segment.color} ${currentPercentage}% ${nextPercentage}%`;
        if (index < pieSegments.length - 1) {
            gradientString += ', ';
        }
        currentPercentage = nextPercentage;
    });

    gradientString += ')';
    pieChartContainer.style.background = gradientString;
}

// Call the function to update the dashboard
updateDashboard();
