import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Projects";
import Books from "./components/Books";
import Media from "./components/Media";
import Contact from "./components/Contact";
import NavBar  from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route component = {Home} path='/'exact />
      <Route component = {About} path='/about' />
      <Route component = {SinglePost} path='/post/:slug' />
      <Route component = {Post} path='/post' />
      <Route component = {Project} path='/project' />
      <Route component = {Books} path='/books' />
      <Route component = {Media} path='/media' />
      <Route component = {Contact} path='/contact' />
    </Switch>
    </BrowserRouter>
  )
    
  
}

export default App;
