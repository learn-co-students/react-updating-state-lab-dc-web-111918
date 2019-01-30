import React from 'react'

export default class DigitalClicker extends React.Component{
   constructor(){
    super()
    this.state={
      timesClicked: 0,
    }
  }

  updateClick=(e)=>{
    let updatedClick = this.state.timesClicked + 1
    this.setState({
      timesClicked: updatedClick
    })
  }

  render(){
    return(
      <div>
      <button onClick={this.updateClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
