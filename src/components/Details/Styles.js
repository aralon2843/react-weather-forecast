import styled from 'styled-components'

export const StyledDetails = styled.div`
  margin-bottom: 15px;
`

export const StyledDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 3px;
`

export const StyledSun = styled.div`
  display: flex;
  padding-top: 5px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  margin-right: 25px;
  font-size: 24px;
  line-height: 30px;
  min-width: 130px;
  @media (max-width: 768px) {
    font-size: 17px;
    display: block;
    margin-right: 10px;
  }
`

export const StyledMoon = styled.div`
  display: flex;
  padding-top: 5px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 24px;
  line-height: 30px;
  min-width: 130px;
  @media (max-width: 768px) {
    font-size: 17px;
    display: block;
  }
`

export const StyledSunrise = styled.div`
  padding-left: 43px;
  background: url('https://image.flaticon.com/icons/png/512/728/728123.png')
    left/cover no-repeat;
  background-size: 32px;
  margin: 5px 20px 15px 0px;
`
export const StyledSunset = styled.div`
  padding-left: 43px;
  background: url('https://image.flaticon.com/icons/png/512/728/728124.png')
    left/cover no-repeat;
  background-size: 32px;
  margin: 5px 0px 15px 0px;
`
export const StyledMoonrise = styled.div`
  padding-left: 43px;
  background: url('https://image.flaticon.com/icons/png/512/728/728098.png')
    left/cover no-repeat;
  background-size: 32px;
  margin: 5px 20px 15px 0px;
`
export const StyledMoonset = styled.div`
  padding-left: 43px;
  background: url('https://image.flaticon.com/icons/png/512/728/728099.png')
    left/cover no-repeat;
  background-size: 32px;
  margin: 5px 0px 15px 0px;
`

export const StyledTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 25px;
`
