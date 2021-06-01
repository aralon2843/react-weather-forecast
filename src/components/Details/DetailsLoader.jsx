import React from "react"
import ContentLoader from "react-content-loader"

const DetailsLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={140}
    height={180}
    viewBox="0 0 140 180"
    backgroundColor='rgba(255, 255, 255, 0.2)'
    foregroundColor='rgba(255, 255, 255, 0.4)'
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="130" height="85" />
    <rect x="0" y="93" rx="10" ry="10" width="130" height="85" />
  </ContentLoader>
)

export default DetailsLoader