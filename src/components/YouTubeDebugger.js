import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state={
   errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } }
    }
  }

  changeResolution=(e)=>{
    this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
  })
  }

  changeBitrate=(e)=>{
    this.setState({
  settings: {
    ...this.state.settings,
    bitrate: 12
  }
})
  }

  render(){
    return(
      <div>
      <button className='bitrate' onClick={this.changeBitrate}>
      Bitrate </button>
       <button className='resolution' onClick={this.changeResolution}>
        Resolution</button>
      </div>
    )
  }
}
