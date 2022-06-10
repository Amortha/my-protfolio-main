import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Blogs from './Components/Blogs/Blogs';
import Headers from './Components/Headers/Headers';
import Home from './Components/Home/Home';
import ParticleBackground from './Components/ParticelsJs/ParticleBackground/ParticleBackground';
import ShopDetails from './Components/ShopDetails/ShopDetails';

function App() {
  return (
    <div className="App">
      <ParticleBackground></ParticleBackground>
      <BrowserRouter>
        <Headers></Headers>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutme">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/shop">
            <ShopDetails></ShopDetails>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
