import React from 'react'

const ChartItem = (props) => {
  return(
    <div className="chart-item">
      <div className="chart-position">
        <h2>{props.position} </h2>
      </div>
      <div className="chart-song">
        <h4>Song: {props.songName}</h4>
      </div>
      <div className="chart-artist">
        <h4>Artist: {props.artistName}</h4>
      </div>
    </div>
  )
}


export default ChartItem;
