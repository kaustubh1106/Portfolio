import './App.css';
import Navbar from './component/Navbar/Navbar';
import Intro from './component/Intro/Intro';
import Skills from "./component/Skills/Skills.jsx"
import Cursor from './component/Cursor/Cursor.jsx';
import Projects from "./component/Projects/Projects.jsx"
function App() {
  return (
    <div className="App">
      <Cursor/>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
