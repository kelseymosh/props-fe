import { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlantsContainer from "./containers/PlantsContainer";
import MyNavbar from "./components/MyNavbar";

class App extends Component {
  state = {
    plants:[],
  }

  componentDidMount(){
    fetch('http://localhost:8000/plants/')
      .then(response => response.json())
      .then(plants => this.setState({plants}))
  }

  render(){
    return (
      <div className="App">
        <MyNavbar />
        <PlantsContainer plants={this.state.plants} />
      </div>
    );
  }
}

export default App;
