var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#4e79a7",
                backgroundColor: "#4e79a7",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#59a14f",
                backgroundColor: "#59a14f",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#9c755f",
                backgroundColor:"#9c755f",
                borderWidth:2,
                
              }, { 
                data: [
                  {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#bab0ac",
                backgroundColor: "#bab0ac",
                borderWidth:2,
                
              }, { 
                data: [
                  {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#f28e2b",
                backgroundColor: "#f28e2b",
                borderWidth:2,
                
              }, { 
                data: [
                  {x:65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#edc948",
                backgroundColor: "#edc948",
                borderWidth:2,
                
              }, { 
                data: [
                  {x:62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#76b7b2",
                backgroundColor: "#76b7b2",
                borderWidth:2,
                
              }, { 
                data: [
                  {x:65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#e15759",
                backgroundColor: "#e15759",
                borderWidth:2,
                
              }, { 
                data: [
                  {x:81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#ff9da7",
                backgroundColor: "#ff9da7",
                borderWidth:2,
                
              }, 
            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita ($)'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy (age in years)'
                  }
              }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Top 10 countries life expectancy by GDP per capita', 
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Japan has the highest life expectancy and the' +
                     ' second highest GDP per capita, soaring high above' + 
                     ' other top 10 countries like India and Pakistan, that' +
                     ' have low life expectancies and GDP per capita.'
                }
            },
          }
        });