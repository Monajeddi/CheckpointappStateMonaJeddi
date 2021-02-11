import './App.css';
import React , { Component } from 'react';
import Profil from './components/Profil'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap' 

class App extends Component {

  state = {
    show: false
  }

  handleClickShow = () => {
    this.setState({
      show: !this.state.show

    })

}

  render(){
     return (
        <div className="App">
          <Button variant="info" onClick={this.handleClickShow} style={{marginTop : "20px"}}>Toggle</Button>
          {this.state.show && <Profil/>}
          

         </div>
  );
}

  }
 

export default App;
