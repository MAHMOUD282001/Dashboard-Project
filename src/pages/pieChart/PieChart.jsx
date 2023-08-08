import { Box } from '@mui/material'
import React from 'react'
import Pie from './Pie'
import MainHeader from '../../components/MainHeader'

function PieChart() {
  return (
    <>
    <MainHeader title={"Pie Chart"} subTitle={"Welcome To Pie Chart"} />
    <Pie/>
    </>
  )
}

export default PieChart