import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllPlantsContainer from './containers/AllPlantsContainer';
import PlantPageContainer from './containers/PlantPageContainer';
import ListPlantContainer from './containers/ListPlantContainer';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
          <MyNavbar />
            <Switch>
              {/* <Route path="/" exact component={App} /> */}
              <Route path="/listplant" component={ListPlantContainer} />
              <Route path="/plants" exact component={AllPlantsContainer}/>
              <Route path="/plants/:id" component={PlantPageContainer} />
            </Switch>
      </div>
    </Router>
  );
}

export default App;
