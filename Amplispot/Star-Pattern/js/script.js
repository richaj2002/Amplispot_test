// 1. Dynamic Subtitle with Real-Time Clock
function updateSubtitle() {
    const subtitleElement = document.getElementById('subtitle');
    setInterval(() => {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const formattedTime = currentDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
      subtitleElement.textContent = `Data last updated on: ${formattedDate}, ${formattedTime}`;
    }, 1000); // Update every second
  }
  updateSubtitle();
  
  // 2. Donut Chart with Live Updates
  const chartData = {
    Completed: 40,
    Pending: 60,
  };
  
  // Convert data for Chart.js
  const donutData = {
    labels: Object.keys(chartData),
    datasets: [
      {
        label: 'Task Status',
        data: Object.values(chartData),
        backgroundColor: ['#3498db', '#e74c3c'],
        hoverOffset: 4,
      },
    ],
  };
  
  let donutChart; // Reference to the chart instance
  
  function initializeDonutChart() {
    const ctx = document.getElementById('donutChart').getContext('2d');
    donutChart = new Chart(ctx, {
      type: 'doughnut',
      data: donutData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }
  
  function initializeDonutChart() {
    const ctx = document.getElementById('donutChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: donutData,
      options: {
        responsive: true, // Ensures the chart scales properly
        maintainAspectRatio: true, // Maintains the aspect ratio of the chart
        plugins: {
          legend: {
            position: 'top', // Positions the legend at the top
          },
        },
      },
    });
  }
  
  initializeDonutChart();
  
  // Handle Chart Updates
  document.getElementById('updateChartBtn').addEventListener('click', () => {
    // Simulate new data
    chartData.Completed = Math.floor(Math.random() * 100);
    chartData.Pending = 100 - chartData.Completed;
  
    // Update chart
    donutChart.data.datasets[0].data = Object.values(chartData);
    donutChart.update();
  });
  
  
  // 3. Dynamic Flex Grid with Interactivity
  const gridData = [
    { title: 'Product A', description: 'This is product A.', image: '../css/image/hpvictus.jpg' },
    { title: 'Product B', description: 'This is product B.', image: '../css/image/hpvictus.jpg' },
    { title: 'Product C', description: 'This is product C.', image: '../css/image/hpvictus.jpg' },
  ];
  
  function populateGrid(data) {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Clear existing content
  
    data.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const img = document.createElement('img');
      img.src = item.image || '../css/image/hpvictus.jpg'; // Fallback image
      img.alt = item.title;
  
      const title = document.createElement('h3');
      title.textContent = item.title || 'Untitled';
  
      const description = document.createElement('p');
      description.textContent = item.description || 'No description available.';
  
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(description);
      gridContainer.appendChild(card);
    });
  }
  
  populateGrid(gridData);

  
  // Add New Card
  document.getElementById('addCardBtn').addEventListener('click', () => {
    const newCard = {
      title: `Product ${String.fromCharCode(65 + gridData.length)}`,
      description: `This is product ${String.fromCharCode(65 + gridData.length)}.`,
      image: '',
    };
    gridData.push(newCard); // Add to data array
    populateGrid(gridData); // Re-populate the grid
  });
  
  // Search/Filter Cards
  document.getElementById('searchInput').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = gridData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)
    );
    populateGrid(filteredData);
  });
  

  img.src = item.image || 'https://via.placeholder.com/150';
