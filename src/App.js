import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import News from './components/News';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<News country="us" category="general" />}></Route>
          <Route exact path="/business" element={<News country="us" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News country="us" category="entertainment" />}></Route>
          <Route exact path="/health" element={<News country="us" category="health" />}></Route>
          <Route exact path="/science" element={<News country="us" category="science" />}></Route>
          <Route exact path="/sports" element={<News country="us" category="sports" />}></Route>
          <Route exact path="/technology" element={<News country="us" category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
