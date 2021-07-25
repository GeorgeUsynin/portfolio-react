import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";
import DistantWork from './components/DistantWork/DistantWork';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <DistantWork/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
