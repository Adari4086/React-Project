
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Body/Home';
import About from './components/Body/About';
import Player from './components/Body/Player';
import Blog from './components/Body/Blog';
import Contact from './components/Body/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
   <>
   <Router>
   <Header/>
   <Routes>
   <Route path='/React-Project' exact Component={Home}/>
   <Route path='about' exact Component={About}/>
   <Route path='Player' exact Component={Player}/>
   <Route path='Blog' exact Component={Blog}/>
   <Route path='contact' exact Component={Contact}/>
   </Routes>
   </Router>
   <Footer/>
   </>
  );
}
export default App;
