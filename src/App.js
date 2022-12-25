import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';
import Header from './components/Header';
import useFetch from './hooks/useFetch';


function App() {

  //const exampleApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=f004975e8e7d044444cf032071040ab4&hash=13c0cd7925286d0a8a4aac93e7a472c5');
  
  //console.log(exampleApi);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inicio" element={<Home/>} />
          <Route path="/series" element={<Series/>} />
          <Route path="/comics" element={<Comics/>} />
          <Route path="/*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
