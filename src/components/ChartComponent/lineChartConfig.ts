export const config = {
    type: 'line',
    data: {
        labels: [],
        datasets: []
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    color: "rgb(236,236,236)"
                }
            },

        },
        scales: {
            y: {
                ticks: {
                    color: "rgb(210,210,210)",
                },
            },
            x: {
                ticks: {
                    color: "rgb(210,210,210)",
                },

            },

        }

    }
};