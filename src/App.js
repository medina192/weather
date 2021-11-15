
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import './normalize.css';
import './App.css';
import MainPage from './components/MainPage';
import DetailsCity from "./components/DetailsCity";
import PageNotFound from './components/PageNotFound';



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={ <MainPage />} />
          <Route path="/details" element={ <DetailsCity />} />
          <Route path="*" element= { <PageNotFound /> }/>
        </Routes>
    </Router>
  );
}

export default App;
