import React from 'react'
import ContentLoader from 'react-content-loader'

const CurrentWeatherLoader = (props) => (
  <ContentLoader
    speed={2}
    width={270}
    height={187}
    viewBox='0 0 270 187'
    backgroundColor='rgba(255, 255, 255, 0.2)'
    foregroundColor='rgba(255, 255, 255, 0.4)'
    {...props}>
    <rect x='35' y='2' rx='10' ry='10' width='110' height='20' />
    <rect x='155' y='2' rx='10' ry='10' width='60' height='20' />
    <rect x='10' y='40' rx='10' ry='10' width='250' height='70' />
    <rect x='85' y='122' rx='10' ry='10' width='100' height='18' />
    <rect x='10' y='148' rx='10' ry='10' width='250' height='25' />
  </ContentLoader>
)

export default CurrentWeatherLoader
