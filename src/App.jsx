import { Routes, Route } from "react-router-dom";
import Posts from './components/Posts';
import Details from "./components/Details";

function App() {

  return (
    <Routes>
      <Route exact path="/" Component={Posts} />
      <Route path="/posts/:id" Component={Details} />
    </Routes>
  )
}

export default App
