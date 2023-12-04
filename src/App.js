import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Services';
// import Skills from './components/Skills';
import MyProjects from './components/MyProjects'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Quotes from './components/Quotes';
function App() {
  return (
    <div>
    
      <Header></Header>
      <Home></Home>
      <About></About>
      <MyProjects></MyProjects>
      <Quotes></Quotes>
      <Service></Service>
     
      {/* <Skills></Skills> */}
      
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
