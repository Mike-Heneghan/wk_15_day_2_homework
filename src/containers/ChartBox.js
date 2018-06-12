import React, {Component} from 'react';
import Header from '../components/Header'

class ChartBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
    .then(res => res.json())
    .then(chartSongs => this.setState({songs: chartSongs}))
    .catch(error => console.log('Error: ', error))
  }

  render() {
    return(
      <Header heading="UK TOP 20:"/>
      <ChartList songs={this.state.songs}/>
    )
  }
}

export default ChartBox;
