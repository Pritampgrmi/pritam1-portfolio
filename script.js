AOS.init({
  duration: 1000,
  once: true
});

const ctx = document.getElementById('achievements-chart').getContext('2d');

const achievementsChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Durability', 'Weather Response', 'Efficiency', 'Comfort', 'Automation'],
    datasets: [{
      label: 'Smart Cloth Shelter System Features',
      data: [90, 85, 92, 88, 95],
      backgroundColor: [
        'rgba(0, 123, 255, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(0, 123, 255, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)',
        'rgb(86, 1, 27)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 20 }
      }
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

