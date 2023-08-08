import React from 'react'
import Line from './Line'
import MainHeader from '../../components/MainHeader'

function LineChart() {
  return (
    <>
    <MainHeader title={"Line Chart"} subTitle={"Welcome To Line Chart"} />
    <Line />
    </>
  )
}

export default LineChart