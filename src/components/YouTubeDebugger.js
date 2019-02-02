import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'}
      }
    })
  }

  render() {
    return (
      <div>
        <h3>Bitrate: {this.state.settings.bitrate}</h3>
        <button className="bitrate" onClick={this.handleBitrateClick}>Change Bitrate</button>
        <h3>Resolution: {this.state.settings.video.resolution}</h3>
        <button className="resolution" onClick={this.handleResolutionClick}>Change Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
