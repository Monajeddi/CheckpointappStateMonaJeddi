import React, { Component } from 'react'

class Timer extends Component {

    constructor(props){
        super(props);
        this.state = {digit: 0}
      }
     
      componentDidMount = () => {
          this.myTimer = setInterval(() => {
              this.setState(prevState => ({
                  digit: prevState.digit + 1,
              })) ;   
          }, 1000);
          
      };


      clearInterval = () => {
          clearInterval(this.myTimer)
      }

    render() {
        return (
            <div>

                 {this.state.digit}


            </div>
        )
    }
}
export default Timer