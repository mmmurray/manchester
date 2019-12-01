import React from 'react'
import styled from 'styled-components'
import LineChart from '.'
import { createComponentDocs } from '../../showcase/docs'

const LineChartContainer = styled.div`
  width: 100%;
  height: 200px;
`

export default createComponentDocs({
  component: LineChart,
  props: {
    xLabel: {
      description: 'X-Axis label',
      value: 'X Axis',
    },
    yLabel: {
      description: 'Y-Axis label',
      value: 'Y Axis',
    },
    data: {
      description: 'Data points',
      value: [
        [0, -4],
        [1, 2],
        [2, 6],
        [3, 9],
        [4, 15],
        [5, 13],
        [6, 8],
        [7, 9],
        [8, 5],
        [9, 3],
      ],
    },
  },
  render: element => <LineChartContainer>{element}</LineChartContainer>,
})
