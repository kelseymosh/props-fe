import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllPlantsContainer from './containers/AllPlantsContainer';
import PlantPageContainer from './containers/PlantPageContainer';
import ListPlantContainer from './containers/ListPlantContainer';
import LoginContainer from './containers/LoginContainer';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    user: {}
  }

  login = (username, password) => {
    fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
              username,
              password
            }
        })
    })
    .then(response => response.json())
    .then(result => {
        if(result.token){
          localStorage.setItem('token', result.token)
          this.setState({
            user: result.user
          })
      } else {
        // this.setState({
        //   error: result
      // })
    }
    })
  }

  render() {
    return (
      <div className='App'>
        {this.state.user.username
        ? <h2>Welcome {this.state.user.fullname}</h2>
        : null
        }
        <Router>
          <MyNavbar />
            <Switch>
              <Route path='/' exact 
                render={() => (<LoginContainer login={this.login} />)}
              />
              <Route path='/listplant' component={ListPlantContainer} />
              <Route path='/plants' exact component={AllPlantsContainer}/>
              <Route path='/plants/:id' component={PlantPageContainer} />
            </Switch>
        </Router>

      </div>
    );
  }
}


