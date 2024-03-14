
import './App.css';
import Demo from './components/Demo';
import EventDemo from './components/EventDemo';
import FormDemo from './components/FormDemo';
import RecipeList from './components/RecipeList';
import StateDemo from './components/StateDemo';

function App() {

  return (
    <div className="App">
      <h3> It'smy First react Application.</h3>

      <h3>Simple form Demo</h3>
      <FormDemo />
      <h3> React Sate Demo</h3>
      <StateDemo />
      <h3> React Event Demo</h3>
      <EventDemo />
      <RecipeList></RecipeList>
      <Demo></Demo>
    </div>
  );
}

export default App;
