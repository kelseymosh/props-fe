import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllPlantsContainer from './containers/AllPlantsContainer';
import PlantPageContainer from './containers/PlantPageContainer';
import ListPlantContainer from './containers/ListPlantContainer';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    user: {}
  }

  login = (username, password) => {
    fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            username,
            password
          }
        )
    })
    .then(response => response.json())
    .then(result => {
        if(result.access){
          localStorage.setItem('token', result.access)
          this.setState({ user: { username, password } })
          fetch('http://localhost:8000/profile/', {
            headers: {
              'Authorization': `Bearer ${result.access}`
            },
          }) 
            .then(response => response.json())
            .then(result => this.setState({ user: result }))
      } else {
        console.log("nice try asshole")
      }
    })
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <MyNavbar user={this.state.user} />
            <Switch>
              <Route path='/' exact 
                render={() => (<LoginContainer login={this.login} />)}
              />
              <Route path='/listplant' component={ListPlantContainer} />
              <Route path='/plants' exact component={AllPlantsContainer} />
              <Route path='/plants/:id' component={PlantPageContainer} />
              <Route path='/signup' component={SignUpContainer} />
            </Switch>
        </Router>

      </div>
    );
  }
}


