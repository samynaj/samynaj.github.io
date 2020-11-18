import './App.scss';
import Navbar from './components/nav/nav';
import Bounce from 'react-reveal/Bounce';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Experience from './pages/experience/experience';
import Projects from './pages/projects/projects';
import Contact from './pages/contacts/contacts';


function App() {
  return (
    <div className="App">
      <div className='top-nav'>
        <Bounce duration={5000}>
          <a href='resume.pdf' target='_blank'><button className='download'>Download Resume</button></a>
        </Bounce>
       
          
        
        <a href='https://samynaj.hashnode.dev/' target='_blank' rel='noreferrer'> <Bounce duration={5000}><button className='blog'>Blog</button></Bounce></a>
      </div>
      <div className='nav'>
        <Bounce duration={5000}>
          <Navbar/>
        </Bounce>
      </div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/experience' component={Experience}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contacts' component={Contact}/>
      </Switch>

      
      
    </div>
  );
}

export default App;
