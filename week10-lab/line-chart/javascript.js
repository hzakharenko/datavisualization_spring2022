var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1800', '1825', '1850', '1875', '1900', '1925', '1950',
        '1975', '2000', '2021'],
        datasets: [{
            label: 'China',
            data: [32, 32, 32, 31.96, 31.75, 31.55, 40.73, 63.26, 70.03, 77.4],
            borderColor: '#27B4B8',
            backgroundColor: '#27B4B8',
            tension: 0.1},
        {
            label: 'India',
            data: [25.44, 25.44, 25.44, 25.11, 18.37, 26.69, 34.92, 51.51, 
                62.34, 69.77],
            borderColor: '#7576BA',
            backgroundColor: '#7576BA',
            tension: 0.1},
        {
            label: 'Brazil',
            data: [32, 32, 31.99, 32.06, 32.4, 32.75, 51.78, 63.65, 71.44, 
                76.33],
            borderColor: '#94705A',
            backgroundColor: '#94705A',
            tension: 0.1},
        {
            label: 'Indonesia',
            data: [30, 30, 30, 30.04, 30.24, 30.43, 37.16, 56.49, 67.27, 72.51],
            borderColor: '#49B830',
            backgroundColor: '#49B830',
            tension: 0.1},
        {
            label: 'United States',
            data: [39.41, 39.41, 39.41, 39.41, 48.92, 58.47, 68.07, 72.44, 
                76.9, 79.59],
            borderColor: '#E0C651',
            backgroundColor: '#E0C651',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Life expectancy of the largest countries in' +
                ' the world (by population) over time',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The United States life expectancy rates have' +
                 ' outpaced the other top 5 countries with largest' + 
                 ' populations throughout history.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});