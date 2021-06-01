import React from 'react'
import ContentLoader from 'react-content-loader'

const DayForecastLoader = (props) => (
  <ContentLoader
    speed={2}
    width={145}
    height={175}
    viewBox='0 0 145 175'
    backgroundColor='rgba(255, 255, 255, 0.2)'
    foregroundColor='rgba(255, 255, 255, 0.4)'
    style={{flex: '0 0 135px'}}
    {...props}>

    <rect x='0' y='0' rx='10' ry='10' width='75' height='20' />
    <rect x='0' y='30' rx='10' ry='10' width='100' height='110' />
    <rect x='0' y='150' rx='10' ry='10' width='100' height='20' />
  </ContentLoader>
)

export default DayForecastLoader
