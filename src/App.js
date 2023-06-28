import Header from './components/Header.jsx';
import Section from './components/Section.jsx';
import Main from './components/Main.jsx';
import './App.style.css';

function App() {
  return (
    <div id='divAppMaior'>
      <Header />
      <div className='divPrincipal'>
        <Section />
        <Main />
      </div>
    </div>
  );
}

export default App;
