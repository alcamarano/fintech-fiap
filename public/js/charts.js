const canvasCashFlowChart = document.getElementById('canvasCashFlowChart');

new Chart(canvasCashFlowChart, {
    type: "bar",
    
    data: {
    labels: [
      "Jul/2025",
      "Ago/2025",
      "Set/2025",
      "Out/2025",
      "Nov/2025",
      "Dez/2025",
      "Jan/2026",
      "Fev/2026",
      "Mar/2026",
      "Abr/2026",
      "Mai/2026",
      "Jun/2026"
    ],

    datasets: [
      {
        label: "Receitas",

        data: [
          3200,
          7100,
          1400,
          4500,
          3900,
          3500,
          4600,
          4700,
          2400,
          2500,
          7600,
          4000
        ],

        backgroundColor: "#16A34A",

        borderColor: "#DC2626",

        borderWidth: 0,

        borderRadius: 0,

        borderSkipped: false,

        categoryPercentage: 0.8,

        barPercentage: 0.8
      },

      {
        label: "Despesas",

        data: [
          1000,
          7400,
          5000,
          3500,
          6100,
          3100,
          4700,
          8500,
          8100,
          4400,
          8100,
          3000
        ],

        backgroundColor: "#C52B2B",

        borderColor: "#C52B2B",

        borderWidth: 0,

        borderRadius: 0,

        borderSkipped: false,

        categoryPercentage: 0.8,

        barPercentage: 0.8
      }
    ]
  },

  options: {
    responsive: true,

    // Importante para evitar o gráfico crescendo infinitamente
    maintainAspectRatio: false,

    interaction: {
      intersect: false,
      mode: "index"
    },

    plugins: {
      legend: {
        display: true,

        position: "bottom",

        labels: {
          color: "#A1A1AA",

          boxWidth: 10,

          boxHeight: 10,

          padding: 16,

          usePointStyle: false,

          font: {
            size: 11,
            family: "Arial"
          }
        }
      },

      tooltip: {
        enabled: true,

        backgroundColor: "#18181B",

        titleColor: "#FFFFFF",

        bodyColor: "#D4D4D8",

        padding: 12,

        displayColors: true,

        boxWidth: 10,

        boxHeight: 10,

        callbacks: {
          label(context) {
            const value = context.parsed.y;

            return `${context.dataset.label}: R$ ${value.toLocaleString(
              "pt-BR"
            )}`;
          }
        }
      }
    },

    scales: {
      x: {
        grid: {
          display: true,

          color: "rgba(255, 255, 255, 0.06)",

          drawTicks: false
        },

        border: {
          display: false
        },

        ticks: {
          color: "#A1A1AA",

          padding: 8,

          font: {
            size: 10,
            family: "Arial"
          }
        }
      },

      y: {
        beginAtZero: true,

        grid: {
          display: true,

          color: "rgba(255, 255, 255, 0.08)",

          drawTicks: false
        },

        border: {
          display: false
        },

        ticks: {
          display: false
        }
      }
    }
  }
});