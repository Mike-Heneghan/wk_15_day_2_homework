import React from 'react'
import ChartItem form './ChartItem'

const ChartList = (props) => {

  const chartInfo = props.entry.map((entry, index) => {
    return <ChartItem key={index} position={index + 1} songName={entry[im:name].label}
  })



}

export default ChartList;
