var ctx = document.getElementById('timeUseUS').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Paid work',
              'Education',
              'Housework',
              'Shopping',
              'Other unpaid work',
              'Eating and drinking'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [251, 31, 100, 22, 65, 63],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(64, 64, 64)'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
              title: {
                display: true,
                text: 'U.S. Time use'
              }
            }
          }
        });


var ctx = document.getElementById('timeUseChina').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              'Paid work',
              'Education',
              'Housework',
              'Shopping',
              'Other unpaid work',
              'Eating and drinking'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [315, 25, 103, 20, 33, 100],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(64, 64, 64)'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: false,
              },
              title: {
                display: true,
                text: 'China Time use'
              }
            }
          }
        });