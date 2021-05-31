import { memo, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { GraphWrapper } from '../Styles'

const Chart = memo((props) => {
  const data = {
    labels: props.data.map((hour) => hour.time),
    datasets: [
      {
        label: 'temperature',
        data: props.data.map((hour) => hour.temperature),
        fill: false,
        backgroundColor: '#EC6E4C',
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  }

  return (
    <GraphWrapper>
      <Line data={data} options={options} width={1200} height={212} />
    </GraphWrapper>
  )
})

export default Chart
