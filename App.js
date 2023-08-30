
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Bag from "./components/Bag";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Route path='/' exact>
     <Home/>
    </Route>
    <Route path='/bag' exact>
      <Bag/>
    </Route>
    </BrowserRouter>
  );
}

export default App;
