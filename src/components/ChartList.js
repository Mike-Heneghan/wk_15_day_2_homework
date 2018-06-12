import React from 'react'
import ChartItem from './ChartItem'

const ChartList = (props) => {

  const chartInfo = props.songs.map((song, index) => {
    return (
      <ChartItem key={index} position={index + 1} songName={song[`im:name`].label} artistName={song[`im:artist`].label}/>
    )
  })

  return (
      <ol className="chart-list">
        {chartInfo}
      </ol>
  )
}

export default ChartList;
