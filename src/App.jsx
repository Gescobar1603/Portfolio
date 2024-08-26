import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from "./components/NavBar";
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';

function App() {

  
  return (
    <div>
    <NavBar/>
    <Banner/>
    <Skills/>
    <Experience/>
    <Projects/>
    <a href="#more" className="view-all">View All</a>
    </div>

  );
}

export default App;
