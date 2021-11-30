
import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Blogs from './pages/blogPosts';
import NetArt from './pages/netArt';







function App() {
  return (
    <div className="App">
      <Navbar/>
      
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route export path='/blogPosts' component={Blogs}/>
         <Route export path='/netArt' component={NetArt}/>
       </Switch>
       
       <Footer/>
    </div>
    
  );
}

export default App;
