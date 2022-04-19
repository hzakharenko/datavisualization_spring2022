var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 181, y: 3750}, {x: 186, y: 3800}, {x: 195, y: 3250}, 
                  {x: 193, y: 3450}, {x: 190, y: 3650}, 
                ],
                label: "Adelie Torgersen",
                borderColor: "#258EA6",
                backgroundColor: "#258EA6",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 174, y: 3400}, {x: 180, y: 3600}, {x: 189, y: 3800}, 
                  {x: 185, y: 3950}, {x: 180, y: 3800},
                ],
                label: "Adelie Biscoe",
                borderColor: "#549F93",
                backgroundColor: "#549F93",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 178, y: 3250}, {x: 178, y: 3900}, {x: 188, y: 3300},
                {x: 184, y: 3900}, {x: 195, y: 3325},
                ],
                label: "Adelie Dream",
                borderColor: "#9FAF90",
                backgroundColor:"#9FAF90",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 192, y: 3500}, {x: 196, y: 3900}, {x: 193, y: 3650},
                {x: 188, y: 3525}, {x: 197, y: 3725},
                ],
                label: "Chinstrap Dream",
                borderColor: "#E2B1B1",
                backgroundColor:"#E2B1B1",
                borderWidth:2,
              }, { 
                data: [
                {x: 211, y: 4500}, {x: 230, y: 5700}, {x: 210, y: 4450},
                {x: 218, y: 5700}, {x: 215, y: 5400},
                ],
                label: "Gentoo Biscoe",
                borderColor: "#E2C2FF",
                backgroundColor:"#E2C2FF",
                borderWidth:2,
              },
            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'body mass (g)'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'flipper length (mm)'
                  }
              }
            }
          }
        });

var config = {
    type: 'doughnut',
    data: {
        labels: ['Overall Female', 'Overall Male', 'Adelie Torgersen Female',
         'Adelie Torgersen Male', 'Adelie Dream Female', 'Adelie Dream Male',
          'Adelie Biscoe Female', 'Adelie Biscoe Male'],
        datasets: [
          {
            backgroundColor: ['#AAA', '#777'],
            data: [73, 73]
          },
          {
            backgroundColor: ['hsla(106, 22%, 50%, 1)', 'hsla(106, 22%, 27%, 1)'],
            data: [24, 23]
          },
          {
            backgroundColor: ['hsla(266, 33%, 38%, 1)', 'hsla(266, 33%, 25%, 1)'],
            data: [27, 28]
          },
          {
            backgroundColor: ['hsla(0, 33%, 38%, 1)', 'hsla(0, 33%, 27%, 1)'],
            data: [22, 22],
          }
        ]
      },
    options: {
        responsive: true
    },
    }

var ctx = document.getElementById("doughnut-chart").getContext("2d");
var myDoughnut = new Chart(ctx, config);
