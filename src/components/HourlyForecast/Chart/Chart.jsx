import { defaults } from 'react-chartjs-2'
import { memo } from 'react'
import { Line } from 'react-chartjs-2'
import { GraphWrapper } from '../Styles'

const Chart = memo((props) => {
  defaults.color = '#fff'
  defaults.font.family = "'Montserrat', 'sans-serif'"
  defaults.font.weight = 500

  const data = {
    labels: props.data.map((hour) =>
      hour.time === '00'
        ? '12 am'
        : hour.time < 12
        ? hour.time + ' am'
        : hour.time + ' pm'
    ),
    scaleFontColor: '#ffffff',
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
    defaultFontColor: '#FFFFFF',
    maintainAspectRatio: false,
  }

  return (
    <GraphWrapper>
      <Line data={data} options={options} width={1200} height={212} />
    </GraphWrapper>
  )
})

export default Chart
